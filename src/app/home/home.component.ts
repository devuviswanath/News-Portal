import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public li:any;
  public lis:any;
  public sec:any;
  public section:any;
  public selectedSection: string|undefined;
  constructor(private http : HttpClient) {
  
   }

  ngOnInit(): void {
   
    this.http.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7')
    .subscribe(Response => {
      this.li=Response;
      this.lis=this.li.results;
      
      
    });

    this.http.get('https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7')
    .subscribe(Response => {
      this.sec=Response;
      this.section=this.sec.results;
      

    
  })
}}
