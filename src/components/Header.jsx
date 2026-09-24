import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function Header({objective}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta Diária: {objective}mL</Text>
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