import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Asset } from "expo-asset";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "Third Item",
  },
  {
    id: "8",
    title: "Third Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

const HomeCourses = ({ route, navigation }) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={styles.HomeCourse}>
          <Image
            source={{
              uri: Asset.fromModule(require("../../assets/img11.png")).uri,
            }}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
              textAlign: "center",
              borderRadius: 15,
            }}
          />
          <Text style={styles.HomeCourse_Text}>View Details</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HomeCourses;

const styles = StyleSheet.create({
  HomeCourse: {
    margin: 9,
    textAlign: "center",
    backgroundColor: "rgb(225,236,240)",
    padding: 10,
    borderRadius: 20,
  },
  HomeCourse_Text: {
    textAlign: "center",
    fontSize: 8,
    marginTop: 10,
    marginBottom: 3,
    fontWeight: "700",
    backgroundColor: "rgb(61,205,144)",
    color: "#fff",
    borderRadius: 20,
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
});
