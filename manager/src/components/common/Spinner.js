import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      {/* If passed size property then it uses that or size large */}
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    // Full width
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
export { Spinner };
