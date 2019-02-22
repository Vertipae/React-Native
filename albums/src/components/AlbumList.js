import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

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
    // Normal view changed to Scrollable content view
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
