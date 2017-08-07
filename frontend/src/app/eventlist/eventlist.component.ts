import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private api:ApiService) { }

  eventList:object[];

  name:string = "";
  date:string="";
  price:string = "";
  amount:string = "";

  email:string="";
  
  ngOnInit() {
    this.api.getEventList().subscribe(result => this.eventList = result);
  }

    add(){
      this.api.addEvent( { "name_event":this.name, "date_event":this.date, "ticket_price": this.price, "ticket_amount": this.amount } ).subscribe(result => this.eventList = result);;

      this.name = "";
      this.date = "";
      this.price = "";
      this.amount = "";

      
    }

    buy(id){
      this.api.buyTicket( { "id_event": id, "guest_email":this.email,} ).subscribe(result => this.eventList = result);;
    }

}
