import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Tile } from "react-native-elements";

function Test() {
  return (
    <View>
      <Text>This is a Test</Text>
      <Tile
        imageSrc={{
          uri: "https://static.tvmaze.com/uploads/images/medium_untouched/79/199221.jpg",
        }}
        title="Avatar!"
        caption="Some Caption Text"
      />
    </View>
  );
}

export default Test;
