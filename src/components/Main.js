require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/images.json');
//利用自执行函数，将图片名信息转换成图片URL路径
imageDatas = (function genImageURL(imageDataArr){
  "use strict";
  for(var i = 0,j = imageDataArr.length;i < j;i++){
    let singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDataArr[i] = singleImageData;
  }

  return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
