import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  whatNewView: {
    height: 70,
    width: w,
    backgroundColor: "#F5FCFF",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1
  },

  photoButton: {
    backgroundColor: "green",
    width: w,
    height: 70,
    marginBottom: 10
  },

  img: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 100
  },

  text: {
    marginLeft: 20,
    marginRight: 70,
    fontSize: 15
  },

  imgPhoto: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 35,
    height: 28
  },

  imgAim: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 35,
    height: 35
  }
}));
