import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function HintMessage() {
    return(
        <View style={styles.container}>
            <Text style={styles.icon}>💡</Text>
            <View style={styles.texts}>
                <Text style={styles.title}>Dica de Saúde:</Text>
                <Text style={styles.text}>
                    Beber água regularmente melhora a concentração, {'\n'}a digestão e mantem a sua energia alta ao longo {'\n'}do dia!
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:400,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    icon:{
        fontSize:35,
        padding:20,
    },
    texts:{
        width:'100%',
    },
    title:{
        color:COLORS.primary,
        fontSize:16,
        fontWeight:'bold',
    },
    text:{
        fontSize: 13,
        color: COLORS.primary,
    },
})
