import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'home', component: MainComponent},
  { path: 'train', component: TrainComponent},
  { path: '**', component: MainComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
