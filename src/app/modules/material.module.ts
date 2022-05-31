import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [],
  
  imports: [
    
  ],
  exports:[ 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatFormFieldModule, 
    MatSelectModule,
    MatSidenavModule,
    MatTableModule ],
})
export class MaterialModule { }
