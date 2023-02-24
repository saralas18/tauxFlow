import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DeviseComponent } from './devise/devise.component';
import { TauxComponent } from './taux/taux.component';
import { HypotheseComponent } from './hypothese/hypothese.component';
import { PeriodeComponent } from './periode/periode.component';
import { RouterModule, Routes } from '@angular/router';
import { VolumeEnCoursComponent } from './volume-en-cours/volume-en-cours.component';
import { ProduitComponent } from './produit/produit.component';
import { ConditionComponent } from './condition/condition.component';
import { RenegocitionComponent } from './renegocition/renegocition.component';
import { DefaillanceComponent } from './defaillance/defaillance.component';


const routes: Routes = [
  { path: 'taux', component: TauxComponent},
  { path: 'volume-en-cours', component: VolumeEnCoursComponent},
  { path: 'renegociation', component: RenegocitionComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DeviseComponent,
    TauxComponent,
    HypotheseComponent,
    PeriodeComponent,
    VolumeEnCoursComponent,
    ProduitComponent,
    ConditionComponent,
    RenegocitionComponent,
    DefaillanceComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
