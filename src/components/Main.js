require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imagesDatas = require('../data/imagesDatas.json');
//利用自执行函数，将图片名信息转成URL路径信息
imagesDatas = (imageDataArr => {
  return imageDataArr.map((image) => {
    image.imageURL = require(`../images/${image.filename}`)
    return image
  })
})(imagesDatas)


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="stage">
          <section className="img-sec">
          </section>
          <nav className="controller-nav"></nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
