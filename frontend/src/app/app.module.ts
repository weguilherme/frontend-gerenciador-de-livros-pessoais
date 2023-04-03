import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/template/header/header.component';
import { LivroCrudComponent } from './views/livro-crud/livro-crud.component';
import { LivroReadComponent } from './component/livro/livro-read/livro-read.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LivroCreateComponent } from './component/livro/livro-create/livro-create.component';
import { BookUpdateComponent } from './component/livro/book-update/book-update.component';
import { LivroRemoveComponent } from './component/livro/livro-remove/livro-remove.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faPen, faTrash, faTrashCan, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoanComponent } from './component/loan/loan-read/loan-read.component';
import { LoanCreateComponent } from './component/loan/loan-create/loan-create.component';
import { LoginComponent } from './component/login/login.component';
import { LogInterceptor }from './resources/services/LogInterceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './component/user/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivroCrudComponent,
    LivroReadComponent,
    LivroCreateComponent,
    BookUpdateComponent,
    LivroRemoveComponent,
    LoanComponent,
    LoanCreateComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right',
    preventDuplicates: true,}),
     BrowserAnimationsModule, 
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true   
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIcons(faCoffee,faPen,faTrash,faUserCircle,faUser)
  }
}
