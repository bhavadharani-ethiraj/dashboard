import { Component, OnInit } from '@angular/core';
import { Mispell } from '../mispell_interface';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-misspelled-word-table',
  templateUrl: './misspelled-word-table.component.html',
  styleUrls: ['./misspelled-word-table.component.css']
})
export class MisspelledWordTableComponent implements OnInit {
  dataserves:Mispell[]=[];

  constructor( private serve:ServeService) {
    this.serve.getMispelledData()
    .subscribe((data:any)=>{this.dataserves=data;
    });
   }

  ngOnInit(): void {
  }

}
