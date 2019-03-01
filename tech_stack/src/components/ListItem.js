// Logic for LibraryList.js how to show one item
import React, { Component } from "react";
// import * as components from 'react-native
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "../components/common/CardSection";
// Importing many actions (gives everything that is exported)
import * as actions from "../actions/index";

class ListItem extends Component {
  // If library id matches with selected library id then it shows description
  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return <Text>{this.props.library.item.description}</Text>;
    }
  }
  render() {
    // console.log(this.props);
    const { titleStyle } = styles;
    const { id } = this.props.library.item;
    return (
      <TouchableWithoutFeedback
        // Calling action creater selectLibrary
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
// First argument is for mapStateToProps
// Second argument is for binding action creaters to this component
export default connect(
  mapStateToProps,
  actions
)(ListItem);
