/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";

import NewsFeed from "./src/screens/NewsFeed/NewsFeed.js";
import CameraScreen from "./src/screens/CameraScreen/CameraScreen.js";

import Header from "./src/components/Header/Header.js";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: NewsFeed,
  Camera: { screen: CameraScreen }
});

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
