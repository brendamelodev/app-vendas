import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
