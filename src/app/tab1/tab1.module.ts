import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
//Aqui vamos fazer os imports das dependências
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //adicionamos HttpClientModule
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]  
  ,providers: [ 
    //Adicionamos 
    UserService
  ]
})
export class Tab1PageModule {}
