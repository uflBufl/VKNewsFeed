import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  stories: {
    paddingLeft: 10,
    width: w,
    backgroundColor: "#F5FCFF",
    elevation: 1
  },

  story: {
    marginTop: 10,
    marginBottom: 10
  },

  storiesView: {
    height: 130
  },

  img: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 100
  },

  name: {
    textAlign: "center",
    width: 90
  }
}));
