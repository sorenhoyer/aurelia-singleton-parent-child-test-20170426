import {inject, bindable, bindingMode} from 'aurelia-framework';
import {SharedParent} from './shared-parent';

@inject(SharedParent)
export class ChildA {
  
  constructor(parent) {
    alert("childa")
    let self = this;
    this.parent = parent;
    this.parent.heading+='2';
  }
}