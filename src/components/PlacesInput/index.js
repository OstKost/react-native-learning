import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const initState = {
  place: ""
};

export default class PlacesInput extends Component {
  state = initState;

  placeChangedHandler = place => {
    this.setState({ place });
  };

  render() {
    const { addPlace } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add place"
          value={this.state.place}
          onChangeText={this.placeChangedHandler}
        />
        <Button
          style={styles.button}
          title="Add"
          onPress={() => {
            addPlace(this.state.place);
            this.setState(initState);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
