import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export function WaterProgress({objective, progress = 0}) {
    
    const porcentagem = Math.round(Math.min(((progress/objective) * 100),100))

    return(
        <View style={styles.container}>
            <Text>Você bebeu {progress}mL de água hoje.</Text>
            <Text style={styles.subtitle}>Você atingiu {porcentagem}% da Meta.</Text>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, {width:`${porcentagem}%`}]}></View>
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
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
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
});


