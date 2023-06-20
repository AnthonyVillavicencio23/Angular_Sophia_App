import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { ComprobantePago } from 'src/app/model/comprobantepago';
import { ComprobantepagoService } from 'src/app/service/comprobantepago.service';
import { PagoDeModulo } from 'src/app/model/pagodemodulo';
import { PagodemoduloService } from 'src/app/service/pagodemodulo.service';

@Component({
  selector: 'app-comprobantepago-creaedita',
  templateUrl: './comprobantepago-creaedita.component.html',
  styleUrls: ['./comprobantepago-creaedita.component.css']
})
export class ComprobantepagoCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  comprobantepago: ComprobantePago = new ComprobantePago();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  idComprobantePago: number = 0;
  edicion: boolean = false;

  listapagomodulo: PagoDeModulo[] = [];
  idpagomoduloSeleccionado: number = 0;

  constructor(
    private cS: ComprobantepagoService,
    private router: Router,
    private route: ActivatedRoute,
    private mS: PagodemoduloService)
  {

  }

  ngOnInit(): void
  {
    this.route.params.subscribe((data: Params) => {
      this.idComprobantePago = data['idComprobantePago'];
      this.edicion = data['idComprobantePago'] != null;
      this.init();
    });


    this.mS.list().subscribe(data => {
      this.listapagomodulo = data
    });


    this.form = new FormGroup
    (
      {
        idComprobantePago: new FormControl(),
        montoIGV: new FormControl(),
        tipoDocumento: new FormControl(),
        ruc: new FormControl(),
        razonSocial: new FormControl(),
        numBoletaFactura: new FormControl(),
        pagoModulo: new FormControl(),

      }
    )
  }

  aceptar(): void {
    this.comprobantepago.idComprobantePago = this.form.value['idComprobantePago'];
    this.comprobantepago.montoIGV = this.form.value['montoIGV'];
    this.comprobantepago.tipoDocumento = this.form.value['tipoDocumento'];
    this.comprobantepago.ruc = this.form.value['ruc'];
    this.comprobantepago.razonSocial = this.form.value['razonSocial'];
    this.comprobantepago.numBoletaFactura = this.form.value['numBoletaFactura'];


    if (this.idpagomoduloSeleccionado > 0) {

      //Pago de Módulo
      let m = new PagoDeModulo();
      m.idPagodeModulo = this.idpagomoduloSeleccionado;
      this.comprobantepago.pagoModulo = m;

      if (this.form.valid) {
        if (this.edicion) {
          this.cS.update(this.comprobantepago).subscribe((data) => {
            this.cS.list().subscribe((data) => {
              this.cS.setList(data);

            })
          })
        } else {
          this.cS.insert(this.comprobantepago).subscribe(() => {
            this.cS.list().subscribe((data) => {
              this.cS.setList(data);

            })
          })
        }
      }
      this.router.navigate(['pages/ComprobantePago/Listar']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.idComprobantePago).subscribe((data) => {
        this.form = new FormGroup({
          idComprobantePago: new FormControl(data.idComprobantePago),
          montoIGV: new FormControl(data.montoIGV),
          tipoDocumento: new FormControl(data.tipoDocumento),
          ruc: new FormControl(data.ruc),
          razonSocial: new FormControl(data.razonSocial),
          numBoletaFactura: new FormControl(data.numBoletaFactura),

        });
      });
    }
  }

}
