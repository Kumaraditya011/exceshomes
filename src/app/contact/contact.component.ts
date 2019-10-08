import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private baseUrl = "http://localhost:3002";


  constructor(private q: HttpClient,
    private router: Router,private tos:ToastrService) { }

  ngOnInit() {
  }
  sendData(cd){
    
    this.q.post(this.baseUrl + '/userc', cd.value).subscribe(
      res => {
        console.log(res)
          
      },
      err =>{ console.log(err)

      }


    );
    this.tos.success("Thank you for contacting","Success")

  }


}
