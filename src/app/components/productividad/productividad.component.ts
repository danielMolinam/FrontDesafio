import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { ProductividadService } from "../../services/service/productividad.service";
@Component({
  selector: 'app-productividad',
  templateUrl: './productividad.component.html',
  styleUrls: ['./productividad.component.scss']
})
export class ProductividadComponent implements OnInit {

  ItemArray;
  examenes:number = 0;
  exaTotal:number = 0;
  cirugias:number = 0;
  cirTotal:number = 0;
  derivaciones:number = 0;
  debTotal:number = 0;
  fonasa:number = 0;
  isapre:number = 0;
  totalAmbulatoria:number = 0;
  total:number = 0;

  constructor(public dialog:MatDialog,private serProductividad: ProductividadService) { }

  ngOnInit() {
    this.productividad();
  }
  async productividad() {
    var response = await this.serProductividad.productividad();
    console.log("respuesta:" + JSON.stringify(response));
    this.ItemArray = response;
    localStorage.setItem("detalle", JSON.stringify(response));
    this.getDetalle();
  }
  async getDetalle(){
    this.ItemArray.forEach(element => {
      if(element.tipo == "Citas ambulatorias") {
        if(element.prevision == "Fonasa")
        {
          this.fonasa += parseInt(element.cantidad);
        }
        if(element.prevision == "Isapre"){
          this.isapre += parseInt(element.cantidad);
        }
        this.totalAmbulatoria += parseInt(element.total);
      } else if (element.tipo == "Exámenes") {
        this.examenes += parseInt(element.cantidad);
        this.exaTotal += parseInt(element.total); 
      } else if (element.tipo == "Cirugías") {
        this.cirugias += parseInt(element.cantidad);
        this.cirTotal += parseInt(element.total);
      } else if (element.tipo == "Derivaciones") {
        this.derivaciones += parseInt(element.cantidad);
        this.debTotal += parseInt(element.total);
      }
    });
    this.total =  this.totalAmbulatoria + this.exaTotal + this.cirTotal + this.debTotal;
  }
  openDialog(){
    const dialog = this.dialog.open(ModalComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog resul ${result}`);
    });
  }

}
