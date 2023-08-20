import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MessDetailService } from '../mess-detail.service';

@Component({
  selector: 'app-mess-detail',
  templateUrl: './mess-detail.component.html',
  styleUrls: ['./mess-detail.component.css']
})
export class MessDetailComponent implements DoCheck {
  constructor(private route: ActivatedRoute, private datas: MessDetailService) { }
  // ngOnInit(){
  //   this.route.queryParamMap.subscribe(params => {
  //     const id = params.get('id');
  //     let finalDatas = this.datas.dataList.filter(data => data.type === id);
  //     console.log(finalDatas,id,params)
  //   });
  // }

  finalDatas: any[] = [];
  id: any = '';
  ngDoCheck(): void {
    this.id = this.route.snapshot.params["id"];
    this.finalDatas = this.datas.dataList.filter(data => data.type === this.id);
    this.datas.setData(this.id);
  }
  test() {
    console.log(this.finalDatas)
  }
}
