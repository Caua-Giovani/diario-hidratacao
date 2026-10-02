import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function WaterProgress({objective, progress = 0}) {
    
    const porcentagem = Math.round(Math.min(((progress/objective) * 100),100))

    return(
        <View style={styles.card}>
            <Text style={styles.consumedText}>{progress} ml</Text>
            <Text style={styles.percentageText}>Você atingiu {porcentagem}% da Meta.</Text>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, {width:`${porcentagem}%`}]}></View>
            </View>
            {objective - progress <=0 ? <Text style={styles.progressConcluded}>Parabéns, você bateu sua meta.</Text> 
            : <Text style={styles.progressRemain}>Continue bebendo agua para atingir a sua meta, faltam {objective-progress}ml.</Text>}
            
            
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
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
  progressRemain:{
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 16,
    textAlign: 'center',
  },
  progressConcluded:{
    color:'green',
    marginTop:16,
    fontWeight:'bold',
  },
});


