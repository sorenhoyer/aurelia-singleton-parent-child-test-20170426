import {bindable} from 'aurelia-framework';

export class ViewmodelWithSubrouter {
  @bindable router;
  heading = 'viewmodel-with-subrouter';
  configureRouter(config, router) {
    config.map([
      { route: ['','shared-parent/child-a'],  moduleId: PLATFORM.moduleName('./child-a') , nav: true, title: 'Shared Parent - child-a' },
        { route: 'shared-parent/child-b', moduleId: PLATFORM.moduleName('./child-b'), nav: true, title: 'Shared Parent - child-b' },
    ]);

    this.router = router;
  }

  constructor() {}
}
