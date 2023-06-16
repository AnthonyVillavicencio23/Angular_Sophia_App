import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagodemodulo',
  templateUrl: './pagodemodulo.component.html',
  styleUrls: ['./pagodemodulo.component.css']
})
export class PagodemoduloComponent implements OnInit {

  constructor(public route: ActivatedRoute )
  {

  }
  ngOnInit(): void {}

}
