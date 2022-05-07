import{ View, Text, StyleSheet} from 'react-native'

export default function MealDetails({duration, complexity, affordability, style}) {
    return(
        <View style={styles.details}>
        <Text style={[styles.detailsItem, style]}>{duration} minute</Text>
        <Text style={[styles.detailsItem, style]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailsItem, style]}>{affordability.toUpperCase()}</Text>
    </View>
    )
}
const styles= StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    detailsItem: {
        marginHorizontal: 10,
        fontWeight: '800'
    },
   
})