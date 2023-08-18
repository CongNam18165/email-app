import { Component } from '@angular/core';
import { MessListService } from '../mess-list.service';

@Component({
  selector: 'app-mess-list',
  templateUrl: './mess-list.component.html',
  styleUrls: ['./mess-list.component.css']
})
export class MessListComponent {
  constructor(private messList: MessListService) { }
  datas: any = this.messList.datas;

}
