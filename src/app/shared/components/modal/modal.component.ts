import { Component, OnInit, Inject, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  ItemsArray;
  constructor(public dialog:MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public messaje:string) { }

  ngOnInit() {
    this.tabla();
  }
  async tabla(){
    var response = JSON.parse(localStorage.getItem("detalle"));
    this.ItemsArray = response;
  }
  filtrar(filtro) {
    var filtar = this.ItemsArray;
    filtro = (event.target as HTMLInputElement).value;
    this.ItemsArray = filtar.filter(function(array) {
      console.log(filtro);
      
      if (array.sucursal.toLowerCase().includes(filtro)) {
        return array
      }
      else  if (array.mes.toString().includes(filtro) ) {
        return array
      }
      else  if (array.prevision.toLowerCase().includes(filtro) ) {
        return array
      }
      else  if (array.tipo.toLowerCase().includes(filtro) ) {
        return array
      }
      else  if (array.total.toString().includes(filtro) ) {
        return array
      }
      else  if (array.anio.toString().includes(filtro) ) {
        return array
      }
      else  if (array.cantidad.toString().includes(filtro) ) {
        return array
      }
    });
    console.log(this.ItemsArray);
  }
  async closeModal(){
    this.dialog.close(ModalComponent);
  }
 
}
