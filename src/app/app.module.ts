import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OutlistComponent } from './outlist/outlist.component';
import { FormComponent } from './form/form.component';
import { OutlistDetailsComponent } from './outlist-details/outlist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OutlistComponent,
    FormComponent,
    OutlistDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/form', pathMatch: 'full'
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'outlist',
        component: OutlistComponent
      },
      {
        path: 'outlist-details',
        component: OutlistDetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
