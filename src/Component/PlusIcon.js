import React from "react";
import { StyleSheet, Pressable,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlusIcon = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AddTask");
  };
  return (
    <Pressable hitSlop={8} onPress={onPress} style={styles.container}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#4681A3",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width: 40,
    height:40,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color:"white",
    fontWeight: "700",
  },
});
export default React.memo(PlusIcon);
