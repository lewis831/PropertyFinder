//Tutorial used to make this app: https://www.raywenderlich.com/126063/react-native-tutorial
//For best practices such as error tracking use this https://zaicheng.me/2016/06/20/react-native-initial-setup/
//Finally don't forget GitHub and Git version control

'use strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return React.createElement(ReactNative.Text, {style: styles.text}, "Hello World!");
  }
}
