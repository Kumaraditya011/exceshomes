import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private baseUrl = "http://localhost:3002";

  alluser: any = [];
  uid: any;
  user: any = [];

  constructor(private q: HttpClient) {
   this.ngOnInit();
   }

  ngOnInit() {

    this.q.get(this.baseUrl + '/viewuser').subscribe(k => {
      this.alluser = k['data'];
    });
  }


  todelete(id) {
    this.uid = id;

  }
  userdelete() {
    this.q.delete(this.baseUrl + '/deleteuser/' + this.uid).subscribe(k => {
      this.ngOnInit();
    });
  }
   toupdate(k){
     this.user = k;
   }
   userupdate(ud){
    this.q.put(this.baseUrl + '/updateuser/' , ud.value).subscribe(k => {
      this.ngOnInit();
    });
     
   }

}
