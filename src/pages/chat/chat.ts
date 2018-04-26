import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatdetailsPage } from '../chatdetails/chatdetails';



@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  userinfo: Object;
  ChatdetailsPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //你在这里也可以直接从你的 API 接口或者其他的方法实现用户列表的定义
    this.userinfo = {
      userid: '123321',
      username: '女神'
    };
   this.ChatdetailsPage = ChatdetailsPage;
  }


}
