import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { MessDetailService } from '../mess-detail.service';
@Component({
  selector: 'app-mess-info',
  templateUrl: './mess-info.component.html',
  styleUrls: ['./mess-info.component.css']
})
export class MessInfoComponent implements DoCheck {
  constructor(private route: ActivatedRoute, private datas: MessDetailService) {

  }
  mainDatas: any[] =[];
  infoDatas: any[] =[];
  info: any;
  
  ngDoCheck(): void {
    this.info = this.route.snapshot.params["info"];
    this.mainDatas = this.datas.dataList.filter(data => data.type === this.datas.type);
    this.infoDatas = this.mainDatas.filter(data =>  data.id === Number(this.info))
    console.log(this.info)
  }

}
