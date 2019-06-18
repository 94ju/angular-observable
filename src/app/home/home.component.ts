import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/Rx'
import {Observer} from 'rxjs/Observer'
import { SubscriptionLike } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  nubObSubscription:Subscription;
  custmoerObSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    const mynumber=Observable.interval(1000);

    this.nubObSubscription=mynumber.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );
    const myObervable=Observable.create(
      (observer:Observer<any>)=>{
        setTimeout(()=>{
          observer.next('first package')
        },2000);
        setTimeout(()=>{
          observer.next('second package')
        },3000);
        setTimeout(()=>{
          observer.next('third package')
        },5000)
      }
    );
    this.custmoerObSubscription=myObervable.subscribe(
      (data:string)=>{console.log(data)},
      (error:string)=>{console.log(error)},
      ()=>{console.log('completed')}
    );
  }
  ngOnDestroy(){
    this.custmoerObSubscription.unsubscribe();
    this.nubObSubscription.unsubscribe();
  }
  

}
