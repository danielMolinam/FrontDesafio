import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductividadComponent } from './components/productividad/productividad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, 
MatCardModule, MatGridListModule,MatDialogModule,MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ProductividadService } from "./services/service/productividad.service";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductividadComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule
  ],
  entryComponents:[ModalComponent],
  providers: [ProductividadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
