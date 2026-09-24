import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function Header({objetivo}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta Diária: {objetivo}mL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  title:{
    color:COLORS.primary,
  },
})