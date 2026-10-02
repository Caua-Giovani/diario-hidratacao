import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function Header({objective}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>💧 Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta Diária: {objective} ml</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems:'center',
    marginBottom:24,
  },
  title:{
    color:COLORS.textMain,
    fontSize:22,
    fontWeight:'bold',
  },
  subtitle: {
    fontSize:14,
    color: COLORS.textMuted,
    marginTop:4,
  }
})