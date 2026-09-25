import { ActionButtons } from "./src/components/ActionButtons";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { COLORS } from "./src/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0)
  const GOAL= 2000;

  const addWater = (amount) => {
    setProgress(progress+amount)
  }

  const reiniciar = () => {
    setProgress(0)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <StatusBar barStyle={'auto'}/>

        <View>
          <Header objective={GOAL}/>
          <WaterProgress objective={GOAL} progress={progress}/>
          <ActionButtons funcao={addWater} reiniciar={reiniciar}/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}; 

