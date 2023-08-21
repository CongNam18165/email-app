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


  finalDatas: any[] = [];
  id: any = '';
  // ngOnInit(): void {
  //   this.route.queryParamMap.subscribe((params)=>{
  //     console.log(params)
  //   })
  // }
  ngDoCheck(): void {
    this.id = this.route.snapshot.params["id"];
    this.finalDatas = this.datas.dataList.filter(data => data.type === this.id);
    this.datas.setData(this.id);
  }
  test() {
    console.log(this.finalDatas)
  }
  checkRead(isRead: boolean, id: number){
    this.finalDatas[id-1].isRead = true;
  }
}
