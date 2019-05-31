import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoLabelComponent } from './todo-label/todo-label.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
