import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  container: {
    width: w,
    height: 65,
    // flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#6495ED",
    flexDirection: "row"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },

  img: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    width: 45,
    height: 45
  },

  text: {
    color: "white",
    fontSize: 20,
    marginLeft: 20
  },

  modal: {
    // marginTop: 20,
    // marginRight: 50,
    marginBottom: h / 3,
    width: w / 2,
    // height: 500,
    backgroundColor: "#F5FCFF",
    elevation: 3
  },

  modalContent: {
    fontSize: 17,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 25
  }
}));
