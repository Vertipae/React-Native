import React, { Component } from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    // Big container/wrapper
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      // Required to pass on Android // Passing empty function
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          {/* this.props.children */}
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          {/* Immediately not invoking this () <- not going to add */}
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },

  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    // Spacing between text
    lineHeight: 40
  },

  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "relative",
    flex: 1,
    // Everything will be centered
    justifyContent: "center"
  }
};

export { Confirm };
