import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  content: {
    marginTop: 10,
    backgroundColor: "#F5FCFF",
    width: w,
    elevation: 1
  },

  header: {
    marginTop: 15,
    height: 90,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center"
  },

  footer: {
    // marginTop: 15,
    height: 40,
    // backgroundColor:"red",
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },

  contentText: {
    color: "black",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 15
  },

  name: {
    color: "darkblue",
    fontSize: 17,
    marginLeft: 10
  },

  time: {
    // color:"darkblue",
    // fontSize: 10,
    marginLeft: 10
  },

  img: {
    // marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    width: 70,
    height: 70,
    borderRadius: 100
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "#979797"
  },

  imgIcons: {
    width: 33,
    height: 28,
    marginRight: 3
  },

  imgPoints: {
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "flex-start",
    width: 20,
    height: 20
  },

  imgContent: {
    width: w,
    height: 500,
    marginTop: 10
  },

  pointsButton: {
    marginLeft: 100
    // flex: 0.1,
  }
}));
