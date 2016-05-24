import ng from 'angular';

import 'cropperjs/dist/cropper.min.css';
import Cropper from 'cropperjs/dist/cropper.min.js';

export default class ImageCropperController {
  constructor($element) {
    'ngInject';
    this.$element = $element;
    this.image = this.$element.find('img');
    this.cropper = new Cropper(this.image[0], {
      viewMode: 1,
      aspectRatio: 16 / 9,
      zoomable: false,
    });
  }

  crop() {
    this.cropped = this.cropper.getCroppedCanvas();
    console.log(this.cropped);
  }
}
