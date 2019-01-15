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
import styles from "./NewsStyle.js";

import classNames from "classnames-react-native";

export default class News extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={require("../../assets/img/woman.jpg")}
          />
          <View>
            <Text style={styles.name}>Галь Гадот</Text>
            <Text style={styles.time}>Сегодня в 1:00</Text>
          </View>

          {/* <TouchableHighlight style={styles.pointsButton}>
            <Image
              style={styles.imgPoints}
              source={require("../../assets/img/points.png")}
            />
          </TouchableHighlight> */}
        </View>

        <Text style={styles.contentText}>
          Всем привет, я зарегистрировалась!
        </Text>

        <Image
          style={styles.imgContent}
          source={require("../../assets/img/gal-gadot.jpg")}
        />

        <View
          style={{
            borderBottomColor: "#D3D3D3",
            borderBottomWidth: 1
          }}
        />

        <View style={styles.footer}>
          <Image
            style={styles.imgIcons}
            source={require("../../assets/img/like.png")}
          />
          <Text style={{ fontSize: 17, marginRight: 15 }}>404</Text>

          <Image
            style={styles.imgIcons}
            source={require("../../assets/img/message.png")}
          />
          <Text style={{ fontSize: 17, marginRight: 15 }}>21</Text>

          <Image
            style={styles.imgIcons}
            source={require("../../assets/img/arrow.png")}
          />
          <Text style={{ fontSize: 17, marginRight: 15 }}>6</Text>
        </View>
      </View>
    );
  }
}
