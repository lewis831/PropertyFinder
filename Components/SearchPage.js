import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});

/*
https://www.raywenderlich.com/126063/react-native-tutorial
This is the initial call to render() to set up the view.
You invoke onSearchTextChanged() when the text changes.
You then update the component state to reflect the new input text, which triggers another render.
onSearchTextChanged() then wraps things up by logging the new search string.
*/

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');

  return `http://api.nestoria.co.uk/api?${querystring}`;
}

class SearchPage extends Component {
  // Will swap out later
  constructor(props) {
    // Fix to 'this' is not allowed before super() error https://github.com/lwansbrough/react-native-multipeer/issues/3
    super()
    this.state = {
      searchString: 'london',
      isLoading: false,
    };
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
  }

  onSearchPressed() {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }
  render() {
    console.log('SearchPage.render');

    const spinner = this.state.isLoading ?
      (<ActivityIndicator
        size="large"
      />) :
      (<View />);

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder="Search via name or postcode"
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor="#99d9f4"
            onPress={this.onSearchPressed.bind(this)}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('../Resources/house.png')} style={styles.image} />
        {spinner}
      </View>
    );
  }
}

module.exports = SearchPage;
