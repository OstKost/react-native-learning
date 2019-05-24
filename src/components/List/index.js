import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";

const List = ({ places }) => (
  <View style={styles.container}>
    {places.length > 0 ? (
      places.map((place, id) => <ListItem key={id} place={place} />)
    ) : (
      <Text style={styles.noItems}>No places</Text>
    )}
  </View>
);

export default List;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    alignItems: "center"
  },
  noItems: {
    fontSize: 26,
    fontWeight: "bold"
  }
});
