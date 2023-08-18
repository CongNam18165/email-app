import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessListService {
  datas: any = [
    {
      id: "inbox",
    },
    {
      id: "finance",
    },
    {
      id: "travel",
    },
    {
      id: "personal",
    },
    {
      id: "spam",
    },
    {
      id: "drafts",
    },
    {
      id: "sent",
    },
  ];

  constructor() { }
}
