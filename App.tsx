import { StyleSheet, Text, View } from "react-native";
import { theme } from "./there";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    // alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulian,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: { fontSize: 15, fontWeight: "200" },
});
