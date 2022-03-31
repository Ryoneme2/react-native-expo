import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import { styles } from "./style/main";

console.log("app started");

interface StorageInterface {
  index: number;
  text: string;
}

export default function App() {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(1);

  const [storage, setStorage] = useState<StorageInterface[]>([]);

  const handlerInput = (context: string) => {
    setText(context);
  };

  const submitHandler = () => {
    const newStorageValue: StorageInterface = { index, text };
    setStorage((prevStorage) => [...prevStorage, newStorageValue]);
    setText("");
    setIndex(index + 1);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Todo list apps 🐸
          </Text>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handlerInput}
            placeholder="Type here"
          />
          <Button title="Submit" onPress={submitHandler} />
        </View>
        <View>
          <FlatList
            data={storage}
            renderItem={({ item }) => (
              <View style={styles.list} key={item.index}>
                <View>
                  <Text style={styles.item}>{item.text}</Text>
                </View>
                <View>
                  <Button
                    title="Delete"
                    onPress={() => {
                      setStorage((prevStorage) => {
                        return prevStorage.filter(
                          (storageItem) => storageItem.index !== item.index
                        );
                      });
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
