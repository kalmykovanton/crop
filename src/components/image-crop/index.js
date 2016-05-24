import ng from 'angular';

import ImageCropper from './components';

export default ng.module('app.components.imageCropper', [])
  .directive('imageCropper', ImageCropper)
  .name;
