import { Component, OnInit } from '@angular/core';
import { Grammer } from '../grammer_interface';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-grammer-mistakes',
  templateUrl: './grammer-mistakes.component.html',
  styleUrls: ['./grammer-mistakes.component.css']
})
export class GrammerMistakesComponent implements OnInit {
  dataserves:Grammer[]=[];

  constructor( private serve:ServeService) {
    this.serve.getGrammerData()
    .subscribe((data:any)=>{this.dataserves=data;
    });
   }

  ngOnInit(): void {
  }

}
