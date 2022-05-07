import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails';


export default function MealItem({ title, imageUrl, duration, complexity, affordability, id  }) {
    const navigation = useNavigation();
   function secondMealHandler() {
    navigation.navigate('MealDetailScreen',{
        mealId:id,
        mealImage:imageUrl,
        mealTitle:title
    })
   }
    return <View style={styles.mealStyle}>
        <Pressable android_ripple={{ color: '#262625' }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={secondMealHandler}  
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
               <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    mealStyle: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
})

