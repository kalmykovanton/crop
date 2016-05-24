import template from './template.html';
import controller from './controllers';

export default () => ({
  replace: true,
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'ctrl',
});
