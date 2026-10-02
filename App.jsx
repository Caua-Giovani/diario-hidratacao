import { ActionButtons } from "./src/components/ActionButtons";
import { Header } from "./src/components/Header";
import { WaterProgress } from "./src/components/WaterProgress";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { COLORS } from "./src/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ChangeGoal } from "./src/components/ChangeGoal";
import { HintMessage } from "./src/components/HintMessage";

export default function App() {
  const [progress, setProgress] = useState(0)
  const [GOAL,setGoal] = useState(2000);

  const addGoal = (amount) =>{
    if (GOAL >= 500 && GOAL < 10000){
      setGoal(GOAL+amount)
    } else{
      setGoal(10000)
    }
      
  } 

  const remGoal = (amount) =>{
    if (GOAL > 500 && GOAL <= 10000){
      setGoal(GOAL-amount)
    } else{
      setGoal(500)
    }
  }

  const addWater = (amount) => {
    setProgress(progress+amount)
  }

  const reiniciar = () => {
    setProgress(0)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.app}>
        <StatusBar barStyle={'auto'}/>

        <View>
          <Header objective={GOAL}/>
          <ChangeGoal adicionar={addGoal} subtrair={remGoal} meta={GOAL}/>
          <WaterProgress objective={GOAL} progress={progress}/>
          <ActionButtons funcao={addWater} reiniciar={reiniciar}/>
          <HintMessage/>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}; 

const styles = StyleSheet.create({
  app:{
    padding:20,
  }
})

