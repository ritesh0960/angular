import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { HttpClientModule } from '@angular/common/http';
import { FindDeptComponent } from './find-dept/find-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    ListdeptComponent,
    FindDeptComponent,
    AddDeptComponent,
    EditDeptComponent,
    DeleteDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
