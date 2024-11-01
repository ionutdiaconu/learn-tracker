import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "react-native-web";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pthin">index</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
