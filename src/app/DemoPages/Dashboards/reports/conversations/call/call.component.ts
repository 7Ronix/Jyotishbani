import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.sass']
})
export class CallComponent implements OnInit {
  callDetails: any[]; //Assuming callDetails is an array of objects representing call details
  searchText;
  searchDate;
  visible: boolean = true;



  public daterange: any = {};

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  } 
  onclick() {
    this.visible = !this.visible;
  }




  constructor() { }

  ngOnInit() {
    this.callDetails = [
      { id: 1, duration: '40 mins', caller: 'rakesh', date: '12/05/2006', startTime: '7:30 Am', endTime: '8:10 Am' },
      { id: 2, duration: '30 mins', caller: 'Satabdi', date: '09/05/2007', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 3, duration: '30 mins', caller: 'asha', date: '06/05/2008', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 4, duration: '30 mins', caller: 'puja', date: '17/05/2009', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 5, duration: '30 mins', caller: 'abhips', date: '28/06/2010', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 6, duration: '30 mins', caller: 'subhransu', date: '24/06/2011', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 7, duration: '30 mins', caller: 'satu', date: '27/06/2012', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 8, duration: '30 mins', caller: 'aman', date: '05/06/2013', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 9, duration: '30 mins', caller: 'somya', date: '16/05/2014', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 10, duration: '30 mins', caller: 'sonali', date: '07/05/2015', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 11, duration: '30 mins', caller: 'rupali', date: '04/05/2016', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 12, duration: '30 mins', caller: 'dev', date: '06/06/2017', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 13, duration: '30 mins', caller: 'roni', date: '05/05/2018', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 14, duration: '30 mins', caller: 'rinky', date: '23/05/2019', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 15, duration: '30 mins', caller: 'lipi', date: '18/06/2020', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 16, duration: '30 mins', caller: 'lopa', date: '09/07/2021', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 17, duration: '30 mins', caller: 'chandan', date: '09/09/2022', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 18, duration: '30 mins', caller: 'samikhay', date: '09/03/2023', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 19, duration: '30 mins', caller: 'apu', date: '09/06/2023', startTime: '7:30 Am', endTime: '8:00 Am' },
      { id: 20, duration: '30 mins', caller: 'karu', date: '09/02/2023', startTime: '7:30 Am', endTime: '8:00 Am' },

    ]
  }

}
