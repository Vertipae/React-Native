import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
