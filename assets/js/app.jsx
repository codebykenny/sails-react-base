requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      'react': '/bower_components/react/react-with-addons',
      'reactdom': '/bower_components/react/react-dom',
      'classnames': '/bower_components/classnames/index',
      'components': '/js/components'
    },
});


require(['react', 'reactdom', 'components/test'],
  function (React, ReactDOM, Test) {
    window.React = React;
    window.ReactDOM = ReactDOM;

  	ReactDOM.render(<Test />, document.getElementById('test'));
  }
 );