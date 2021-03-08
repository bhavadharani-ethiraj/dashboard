import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-wise-page13th',
  templateUrl: './students-wise-page13th.component.html',
  styleUrls: ['./students-wise-page13th.component.css']
})
export class StudentsWisePage13thComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordian(event:any) {
    var element = event.target;
    element.classList.toggle("active-accordian");
   
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
   
    }
  }


