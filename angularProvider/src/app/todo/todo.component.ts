import { Component, Inject } from '@angular/core';
import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../id-generator.provider';

let NB_INSTANCES = 0;

@Component({
  selector: 'my-todo',
  template: `
    <div>
      <input type="checkbox" [attr.id]="id"/>
      <my-todo-label><ng-content></ng-content></my-todo-label>
    </div>
  `,
  providers: [UNIQUE_ID_PROVIDER]
})
export class TodoComponent  {
  constructor(@Inject(UNIQUE_ID) public id: string) {}
}
