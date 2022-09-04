import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicallyComponent]'
})
export class DynamicallyComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
