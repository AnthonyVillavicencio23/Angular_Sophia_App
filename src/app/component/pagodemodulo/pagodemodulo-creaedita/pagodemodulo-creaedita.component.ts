import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PagoDeModulo } from 'src/app/model/pagodemodulo';
import * as moment from 'moment';
import { PagodemoduloService } from 'src/app/service/pagodemodulo.service';
import { Tarjeta } from 'src/app/model/tarjeta';
import { TarjetaService } from 'src/app/service/tarjeta.service';
import { Modulo } from 'src/app/model/modulo';
import { moduloService } from 'src/app/service/modulo.service';

@Component({
  selector: 'app-pagodemodulo-creaedita',
  templateUrl: './pagodemodulo-creaedita.component.html',
  styleUrls: ['./pagodemodulo-creaedita.component.css']
})
export class PagodemoduloCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  pagodemodulo: PagoDeModulo = new PagoDeModulo();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  idPagodeModulo: number = 0;
  edicion: boolean = false;

  listatarjeta: Tarjeta[] = [];
  idtarjetaSeleccionado: number = 0;

  listamodulo: Modulo[] = [];
  idmoduloSeleccionado: number = 0;

  constructor(
    private pS: PagodemoduloService,
    private router: Router,
    private route: ActivatedRoute,
    private tS: TarjetaService,
    private mS: moduloService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idPagodeModulo = data['idPagodeModulo'];
      this.edicion = data['idPagodeModulo'] != null;
      this.init();
    });

    this.tS.getTarjetas().subscribe((data) => {
      this.listatarjeta = data;
    });
    this.mS.list().subscribe((data) => {
      this.listamodulo = data;
    });

    this.form = new FormGroup({
      idPagodeModulo: new FormControl(),
      montopormodulo: new FormControl(),
      fechapago: new FormControl(),
      pagado: new FormControl(),
      tarjetacredito: new FormControl(),
      modulo: new FormControl(),
    });
  }

  aceptar(): void {
    this.pagodemodulo.idPagodeModulo = this.form.value['idPagodeModulo'];
    this.pagodemodulo.montopormodulo = this.form.value['montopormodulo'];
    this.pagodemodulo.fechapago = this.form.value['fechapago'];
    this.pagodemodulo.pagado = this.form.value['pagado'];

    if (this.idtarjetaSeleccionado > 0 && this.idmoduloSeleccionado > 0) {
      let t = new Tarjeta();
      t.idTarjeta = this.idtarjetaSeleccionado;
      this.pagodemodulo.tarjetacredito = t;

      let m = new Modulo();
      m.idModulo = this.idmoduloSeleccionado;
      this.pagodemodulo.modulo = m;

      if (this.form.valid) {
        if (this.edicion) {
          this.pS.update(this.pagodemodulo).subscribe((data) => {
            this.pS.list().subscribe((data) => {
              this.pS.setList(data);

            })
          })
        } else {
          this.pS.insert(this.pagodemodulo).subscribe(() => {
            this.pS.list().subscribe((data) => {
              this.pS.setList(data);

            })
          })
        }
      }
      this.router.navigate(['pages/PagoDeModulo/Listar']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.idPagodeModulo).subscribe((data) => {
        this.form = new FormGroup({
          idPagodeModulo: new FormControl(data.idPagodeModulo),
          montopormodulo: new FormControl(data.montopormodulo),
          fechapago: new FormControl(data.fechapago),
          pagado: new FormControl(data.pagado),

        });
      });
    }
  }
}
