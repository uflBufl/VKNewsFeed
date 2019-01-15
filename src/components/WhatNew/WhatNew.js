import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  TouchableHighlight
} from "react-native";
import styles from "./WhatNewStyle.js";

import classNames from "classnames-react-native";

export default class WhatNew extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor={"#ffffff"} style={styles.photoButton}>
        <View style={styles.whatNewView}>
          <Image
            style={styles.img}
            source={require("../../assets/img/man.jpg")}
          />
          <Text style={styles.text}>Что у Вас нового?</Text>

          <Image
            style={styles.imgPhoto}
            source={require("../../assets/img/photo.png")}
          />

          <Image
            style={styles.imgAim}
            source={require("../../assets/img/aim.png")}
          />
        </View>
      </TouchableHighlight>
    );
  }
}
