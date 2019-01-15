import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./HeaderStyle.js";
import Modal from "react-native-modal";

import classNames from "classnames-react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate("Camera")}>
          <Image
            style={styles.img}
            source={require("../../assets/img/blackCamera.png")}
          />
        </TouchableHighlight>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          onBackdropPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          onBackButtonPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
          // supportedOrientations={['portrait', 'landscape']}
        >
          <View style={styles.modal}>
            <View>
              <Text style={styles.modalContent}>Новости</Text>

              <View
                style={{
                  borderBottomColor: "#D3D3D3",
                  borderBottomWidth: 1
                }}
              />

              <Text style={styles.modalContent}>Друзья</Text>
              <Text style={styles.modalContent}>Фотографии</Text>
              <Text style={styles.modalContent}>Видео</Text>
              <Text style={styles.modalContent}>Трансляции</Text>
              <Text style={styles.modalContent}>Подкасты</Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.text}>Новости</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
