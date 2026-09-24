import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function WaterProgress({objective, progress = 0}) {
    
    const porcentagem = Math.round(Math.min(((progress/objective) * 100),100))

    return(
        <View style={styles.container}>
            <Text>Você bebeu {progress}mL de água hoje.</Text>
            <Text style={styles.subtitle}>Você atingiu {porcentagem}% da Meta.</Text>
            <View style={styles.barra}>
                <View style={[styles.progresso, {width:`${porcentagem}%`}]}></View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
    },
    barra:{
        backgroundColor:'#dfdfdf',
        height:20,
        width:'100%',
    },
    progresso:{
        backgroundColor:'#2d82c2',
        height:20,
    },
    })


