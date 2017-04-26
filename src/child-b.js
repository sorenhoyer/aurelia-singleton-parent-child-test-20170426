import {inject, bindable, bindingMode} from 'aurelia-framework';
import {SharedParent} from './shared-parent';

@inject(SharedParent)
export class ChildB {
  
  constructor(parent) {
    alert("childb")
    let self = this;
    this.parent = parent;
    this.parent.heading+='2';
  }
}