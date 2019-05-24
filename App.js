import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PlacesInput from "./src/components/PlacesInput";
import List from "./src/components/List";

export default class App extends Component {
  state = {
    places: []
  };

  addPlaceHandler(newPlace) {
    this.setState(prevState => ({
      places: [...prevState.places, newPlace]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput addPlace={this.addPlaceHandler.bind(this)} />
        <List places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  text: {
    color: "#000",
    fontSize: 26,
    textAlign: "center"
  }
});
