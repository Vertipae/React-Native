import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetails";

class AlbumList extends Component {
  // Initial state
  state = { albums: [] };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data })); // State with response
    // debugger;
  }

  // Helper method
  renderAlbums() {
    return this.state.albums.map(album => (
      // Could be also record={album}
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    // console.log("RENDERI TOIMII");
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
