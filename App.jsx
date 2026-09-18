import { ActionButtons } from "./src/components/ActionButtons";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";
import { View, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./src/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const GOAL = 2000;
  const [consumed, setConsumed] = useState(0);

  const handleAddWater = (amount) =>{
  };

  const handleReset = () =>{
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.background}/>

        <View style={styles.content}>

          <Header/>
          <WaterProgress/>
          <ActionButtons/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
});

