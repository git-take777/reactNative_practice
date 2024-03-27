import {StatusBar} from "expo-status-bar";
import {Image, StyleSheet, Text, View} from "react-native";

export default function App() {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.";
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{width: 100, height: 100}}
            // web上の画像を表示する
            source={{uri: "https://placehold.jp/150x150.png"}}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>{sampleText}</Text>
          <Text style={styles.subText}>React news</Text>
        </View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
    // backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "grey",
  },
});
