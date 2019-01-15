import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  TouchableHighlight,
  FlatList
} from "react-native";
import styles from "./StoriesStyle.js";

import classNames from "classnames-react-native";

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  getList = () => {
    const li = [
      { key: "Райан Гослинг", imgLink: require("../../assets/img/man.jpg") },
      { key: "Галь Гадот", imgLink: require("../../assets/img/woman.jpg") },
      { key: "Райан Гослинг", imgLink: require("../../assets/img/man.jpg") },
      { key: "Галь Гадот", imgLink: require("../../assets/img/woman.jpg") },
      { key: "Райан Гослинг", imgLink: require("../../assets/img/man.jpg") },
      { key: "Галь Гадот", imgLink: require("../../assets/img/woman.jpg") },
      { key: "Райан Гослинг", imgLink: require("../../assets/img/man.jpg") }
    ];

    this.setState({
      list: li
    });
  };

  componentWillMount() {
    this.getList();
  }

  render() {
    return (
      <View style={styles.storiesView}>
        <FlatList
          style={styles.stories}
          horizontal={true}
          data={this.state.list}
          renderItem={({ item }) => (
            <View style={styles.story}>
              <Image style={styles.img} source={item.imgLink} />
              <Text style={styles.name} numberOfLines={1}>
                {item.key}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
