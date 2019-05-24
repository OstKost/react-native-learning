import React from "react";
import { StyleSheet, Text } from "react-native";

const ListItem = ({ place }) => <Text style={styles.listItem}>{place}</Text>;

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee",
    fontSize: 24
  }
});
