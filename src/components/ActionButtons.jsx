import { View, Text, Pressable, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function ActionButtons({funcao, reiniciar}) {
    return(
        <View style={styles.container}>
            <Text>Adiconar consumo:</Text>
            <View style={styles.containerButtons}>
                <Pressable style={styles.button} onPress={()=> funcao(250)}>
                    <Text>+250 mL</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> funcao(350)}>
                    <Text>+350 mL</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> funcao(500)}>
                    <Text>+500 mL</Text>
                </Pressable>
            </View>
            <Pressable style={styles.buttonReinicio} onPress={()=> reiniciar()}>
                    <Text>Reiniciar Dia</Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
        padding:10,
  },
  containerButtons:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    gap:25,
  },
  button:{
    color:'#fff',
    backgroundColor:COLORS.secondary,
    padding: 10,
    borderRadius:10,
    paddingLeft:20,
    paddingRight:20,
  },
  buttonReinicio:{
    backgroundColor:COLORS.danger,
    margin:20,
    padding:10,
    textAlign:'center',
    borderRadius:10,
  },
})
