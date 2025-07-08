import { StyleSheet, View, TextInput } from "react-native";
import { theme } from "../theme";
import ShoppingListItem from "../components/ShoppingListItem";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};

const initialList: ShoppingListItemType[] = [
  {
    id: "1",
    name: "Coffee",
    isCompleted: true,
  },
  {
    id: "2",
    name: "Tea",
  },
  {
    id: "3",
    name: "Sugar",
  },
];

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="E.g Codde"
        style={styles.textInput}
        returnKeyType="done"
        onSubmitEditing={() => {
          console.log("Submitted:", value);
          setShoppingList((prev) => [
            { id: Date.now().toString(), name: value, isCompleted: false },
            ...prev,
          ]);
          setValue("");
        }}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem
          key={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 8,
  },
});
