import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component'
@Component({
  selector: 'app-root',
  template: `
  <h1> Lifecycle </h1>
  <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
  <p>{{test}}</p>
   </fa-lifecycle>
  <button (click)="delete=true"> Click TO Delete </button>
  <button (click)="test='Instead of starting now take end of the sea'"> Click TO Change </button>
  <button (click)="boundValue= 2000"> Click TO Change Binding </button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delete=false;
  test="starting value";
  boundValue=1000;
}




