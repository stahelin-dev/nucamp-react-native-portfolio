import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

function Main() {
  return (
    <Card
      containerStyle={{
        width: 252,
        margin: 0,
        padding: 0,
      }}
    >
      <Card.Title
        style={{
          margin: 0,
          padding: 0,
          borderWidth: 1,
          borderColor: "red",
          borderStyle: "solid",
        }}
      >
        Let's Rank
      </Card.Title>
      <View
        style={{
          margin: 0,
          padding: 0,
          width: 250,
          height: 350,
          borderWidth: 1,
          borderColor: "red",
          borderStyle: "solid",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
              resizeMode="stretch"
              source={{
                uri: "https://static.tvmaze.com/uploads/images/medium_untouched/79/199221.jpg",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
              resizeMode="stretch"
              source={{
                uri: "https://static.tvmaze.com/uploads/images/original_untouched/55/139502.jpg",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,

            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
              resizeMode="stretch"
              source={{
                uri: "https://static.tvmaze.com/uploads/images/medium_untouched/208/522013.jpg",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
              resizeMode="stretch"
              source={{
                uri: "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg",
              }}
            />
          </View>
        </View>
      </View>
    </Card>
  );
}

export default Main;
