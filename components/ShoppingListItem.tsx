import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  name: string;
  isCompleted?: boolean;
};
export default function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(`Delete ${name}`, `Are you sure you want to delete ${name}?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => console.log("Item deleted"),
        style: "destructive",
      },
    ]);
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: { fontSize: 15, fontWeight: "200" },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
});
