import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';
import { HomeComponent } from './home/home.component';

// routing was added in the app.module because it was done manually, since Angular didn't provide 
// the routing option upon creating the new project 
// egghead.io was used as a source for this action
const routes: Routes = [
  {path: 'open', component: OpenComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'done', component: DoneComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OpenComponent,
    DoneComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
