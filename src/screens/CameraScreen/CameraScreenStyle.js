import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#D3D3D3"
  }
}));
