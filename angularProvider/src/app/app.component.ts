import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-todo *ngFor="let todo of todos">
  {{todo}}
</my-todo>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = ["Stop using TODO examples", "???", "Profit!"];
} 
