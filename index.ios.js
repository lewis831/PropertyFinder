//Tutorial used to make this app: https://www.raywenderlich.com/126063/react-native-tutorial
//For best practices such as error tracking use this https://zaicheng.me/2016/06/20/react-native-initial-setup/
//Finally don't forget GitHub and Git version control

let React = require('react');
let ReactNative = require('react-native');

let styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', () => { return PropertyFinderApp; });
