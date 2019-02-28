// Logic for LibraryList.js how to show one item
import React, { Component } from "react";
import { Text, View } from "react-native";
import { CardSection } from "../components/common/CardSection";

class ListItem extends Component {
  render() {
    // console.log(this.props);
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
