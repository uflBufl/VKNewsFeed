import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  FlatList,
  TouchableHighlight,
  Modal
} from "react-native";
// import styles from "./CameraScreenStyle.js";
import WhatNew from "../../components/WhatNew/WhatNew.js";
import Header from "../../components/Header/Header.js";
import News from "../../components/News/News.js";
import Stories from "../../components/Stories/Stories.js";

import classNames from "classnames-react-native";
import Camera from "react-native-camera";

class CameraScreen extends React.Component {
  static navigationOptions = {
    title: "Камера",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#6495ED"
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>qwe</Text>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});

// AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);

// const LogInWithUserContext = withUserContext(LogIn);
export default CameraScreen;
