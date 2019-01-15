import React, { Component } from "react";
import {
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
import styles from "./NewsFeedStyle.js";
import WhatNew from "../../components/WhatNew/WhatNew.js";
import Header from "../../components/Header/Header.js";
import News from "../../components/News/News.js";
import Stories from "../../components/Stories/Stories.js";

import classNames from "classnames-react-native";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalVisible: false, list: [] };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getList = () => {
    const li = [
      {
        key: "Райан Гослинг",
        value: <Header navigation={this.props.navigation} />
      },
      { key: "Райан Гослинг", value: <WhatNew /> },
      { key: "Райан Гослинг", value: <Stories /> },
      { key: "Райан Гослинг", value: <News /> },
      { key: "Райан Гослинг", value: <News /> },
      { key: "Райан Гослинг", value: <News /> },
      { key: "Райан Гослинг", value: <News /> }
    ];

    this.setState({
      list: li
    });
  };

  componentWillMount() {
    this.getList();
  }

  static navigationOptions = {
    title: "Новости",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#6495ED"
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <View>{item.value}</View>}
        />
      </View>
    );
  }
}

// const LogInWithUserContext = withUserContext(LogIn);
export default NewsFeed;
