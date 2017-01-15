import { Component,
   OnInit,
   OnChanges,
   OnDestroy,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
  Input,
ViewChild }
 from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content> </ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p> {{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input() bindable=1000;
@ViewChild('boundParagraph')
boundParagraph:HTMLElement;
  constructor() { }
ngOnChanges(){
this.log('ngOnChanges');
}
ngDoCheck(){
this.log('ngDoCheck');
}
ngAfterContentInit()
{
this.log('ngAfterContentInit');
}
ngAfterContentChecked()
{
this.log('AfterContentChecked');
}
ngAfterViewInit()
{
this.log('ngAfterViewInit');
console.log(this.boundParagraph);
}
ngAfterViewChecked()
{
  this.log('ngafterviewchecked');
}
ngOnDestroy()
{
this.log('ngOnDestroy');
}
  ngOnInit() {
  }
private log(hook:String){
console.log(hook);
}

}
