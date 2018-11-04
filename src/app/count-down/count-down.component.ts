import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, DoCheck {

  constructor() {}

  seconds = 0
  minutes = 15
  hours = 0
  interval
  isAlert = false
  // time

  ngOnInit() {
    // this.time = `Remaining ${this.minutes} : ${this.seconds}`    
  }

  ngDoCheck(){
   
  }

  startCoundown(){
    this.isAlert = false
    this.interval = setInterval( () => {
      if(this.seconds > 0){
        this.seconds--
      }
      if(this.seconds == 0 && this.minutes > 0){
        this.seconds = 60
        this.minutes--
      }
  
      if(this.minutes == 0 && this.seconds == 0){
        clearInterval(this.interval)
        this.isAlert = true
      }
    } , 1000)
    
    // this.time = `Remaining ${this.minutes} : ${this.seconds}`
  }

  addFewMinutes(){
    let random = Math.floor(Math.random() * 10)
    this.minutes += random
  }

  pauseCountdown(){
    clearInterval(this.interval)
  }

}
