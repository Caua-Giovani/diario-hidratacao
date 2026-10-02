import { View, Text, Pressable, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function ActionButtons({funcao, reiniciar}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Adiconar consumo:</Text>
            <View style={styles.containerButtons}>
                <Pressable style={styles.button} onPress={()=> funcao(100)}>
                    <Text style={styles.texto}>+100 ml</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> funcao(200)}>
                    <Text style={styles.texto}>+200 ml</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> funcao(350)}>
                    <Text style={styles.texto}>+350 ml</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=> funcao(500)}>
                    <Text style={styles.texto}>+500 ml</Text>
                </Pressable>
            </View>
            <Pressable style={styles.buttonReinicio} onPress={()=> reiniciar()}>
                    <Text style={styles.texto}>Reiniciar Dia</Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    alignItems:'center',
  },
  containerButtons:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    gap:10,
    marginTop:20,
  },
  button:{
    color:'#fff',
    backgroundColor:COLORS.primary,
    padding: 10,
    borderRadius:10,
    paddingLeft:15,
    paddingRight:15,
  },
  buttonReinicio:{
    backgroundColor:COLORS.danger,
    marginTop:20,
    padding:10,
    textAlign:'center',
    borderRadius:10,
    alignItems:'center',
    width:'50%'
  },
  texto:{
    color:'white',
    fontWeight:'bold',
  },
  title:{
    color:COLORS.textMain,
    fontSize:18,
    fontWeight:'bold',
  },
})
