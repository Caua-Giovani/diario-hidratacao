import { View, Text, Pressable, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function ChangeGoal({adicionar, subtrair, meta}) {
    return(
        <View style={styles.card}>
            <Text style={styles.title}>Ajustar Meta Diária:</Text>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={()=> subtrair(250)}>
                    <Text style={styles.texto}>-250 ml</Text>
                </Pressable>
                <Text style={styles.meta}>{meta} ml</Text>
                <Pressable style={styles.button} onPress={()=> adicionar(250)}>
                    <Text style={styles.texto}>+250 ml</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap:10,
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    alignItems:'center'
  },
  button:{
    borderColor:COLORS.secondary,
    borderWidth:2,
    padding:10,
    borderRadius:10,
    width:'27%',
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    color:COLORS.primary,
    fontWeight:'bold',
  },
  meta:{
    color:COLORS.textMain,
    fontWeight:'bold',
    fontSize:16,
  },
  title:{
    fontSize: 14,
    color: COLORS.textMuted,
    fontWeight:'bold',
  },
})
