import { Component, OnInit, Inject } from '@angular/core';
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
  async closeModal(){
    this.dialog.close(ModalComponent);
  }
 
}
