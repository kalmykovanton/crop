import ng from 'angular';
import 'cropperjs/dist/cropper.min.css';
import Cropper from 'cropperjs/dist/cropper.min.js';

export default class ImageCropperController {
  constructor($element) {
    'ngInject';
    this.$element = $element;
    this.image = this.$element.find('img');
    const cropper = new Cropper(this.image[0], {
      aspectRatio: 16 / 9,
      preview: '#preview',
      crop: function(e) {
        console.log(e.detail.x);
        console.log(e.detail.y);
        console.log(e.detail.width);
        console.log(e.detail.height);
        console.log(e.detail.rotate);
        console.log(e.detail.scaleX);
        console.log(e.detail.scaleY);
  }
    });
  }
}
