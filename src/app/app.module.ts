import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CorrespondenceComponent } from './correspondence/correspondence.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MemberService } from './member.service';

@NgModule({
  declarations: [
    AppComponent,
    CorrespondenceComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
