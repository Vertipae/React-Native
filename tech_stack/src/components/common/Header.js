// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = props => {
  //   const { textStyle, viewStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  // Object properties
  viewStyle: {
    backgroundColor: "#F8F8F8",
    // Move it halfway down
    justifyContent: "center",
    // Move it halfway across the tag
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    // Shadowing bottom line
    shadowColor: "#000",
    shadowOffset: { width: 0, heigth: 4 },
    shadowOpacity: 0.3,
    elevation: 5, // Required for the shadow
    position: "relative"
  },

  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
