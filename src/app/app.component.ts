import * as angular from 'angular';

interface AppComponentVm {
  $onInit?(): void;
  $onDestroy?(): void;
  $postLink?(): void;
}

export function AppComponent() {
  var component: angular.IComponentOptions = {
    templateUrl: 'app/app.component.html',
    bindings: {},
    controller: AppComponentController,
    controllerAs: 'vm'
  };
  return component;
}

function AppComponentController() {
  const vm: AppComponentVm = this;
  console.log('hallo welt');
  vm.name = 'domi dä noob!!!';
}
