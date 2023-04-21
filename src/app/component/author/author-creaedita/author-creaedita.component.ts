import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { AuthorService } from 'src/app/service/author.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-author-creaedita',
  templateUrl: './author-creaedita.component.html',
  styleUrls: ['./author-creaedita.component.css']
})
export class AuthorCreaeditaComponent implements OnInit
{
  form:FormGroup = new FormGroup({});
  author: Author = new Author();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1,'days').toDate();

  constructor(private as: AuthorService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.form = new FormGroup
    (
      {
        id: new FormControl(),
        nameAuthor: new FormControl(),
        emailAuthor: new FormControl(),
        birthDateAuthor: new FormControl()

      }
    )

  }

  aceptar():void
  {
    this.author.id = this.form.value['id'];
    this.author.nameAuthor = this.form.value['nameAuthor'];
    this.author.emailAuthor = this.form.value['emailAuthor'];
    this.author.birthDateAuthor = this.form.value['birthDateAuthor'];

    if(this.form.value['nameAuthor'].length>0 && this.form.value['emailAuthor'].length>0)
    {
      this.as.insert(this.author).subscribe(data=>{
        this.as.list().subscribe(data =>{
          this.as.setList(data);
        })
      })
      this.router.navigate(['loco/loco2']);
    }
    else
    {
      this.mensaje = "Complete los campos !!";
    }
  }

}
