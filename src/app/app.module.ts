import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';

// routing was added in the app.module because it was done manually, since Angular didn't provide 
// the routing option upon creating the new project 
// egghead.io was used as a source for this action
const routes: Routes = [
  {path: 'open', component: OpenComponent},
  {path: '', redirectTo: '/open', pathMatch: 'full'},
  {path: 'done', component: DoneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OpenComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
