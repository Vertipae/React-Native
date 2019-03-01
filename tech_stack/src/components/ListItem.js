// Logic for LibraryList.js how to show one item
import React, { Component } from "react";
// import * as components from 'react-native
import {
  Text,
  TouchableWithoutFeedback,
  View,
  NativeModules,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "../components/common/CardSection";
// Importing many actions (gives everything that is exported)
import * as actions from "../actions/index";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  // If library id matches with selected library id then it shows description
  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  // Key & value is expanded
  return { expanded };
};
// First argument is for mapStateToProps
// Second argument is for binding action creaters to this component
export default connect(
  mapStateToProps,
  actions
)(ListItem);
