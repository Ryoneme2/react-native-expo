import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { styles } from "./style/main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app! 🐸</Text>
        <StatusBar style="auto" />
      </View>

      <ScrollView>
        <Text>Scroll to see the status bar change as you scroll!</Text>
        <View>
          <Text>Scroll down</Text>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginHorizontal: 20,
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}
