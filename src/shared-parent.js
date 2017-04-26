import {inject, bindable, bindingMode, singleton} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@singleton(true)
export class SharedParent {
  todate = '';
  fromdate = '';
  language = 'English';
  
  constructor(signaler) {
    alert("parent")
    let self = this;
    this.heading = 'Shared Parent';

    this.headingLocal = '';
    self.headingLocal+='1';
  }
  
  
}