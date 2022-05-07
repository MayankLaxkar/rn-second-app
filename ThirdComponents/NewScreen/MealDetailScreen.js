import { useLayoutEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import MealDetails from '../NewComponent/MealDetails';
import { MEALS } from '../NewData/dummy-data';
import SubTitle from '../NewComponent/Reusable Component/SubTitle';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../NewComponent/IconButton';
import { FavouriteContext } from '../store/contextFolder/favourite-context'
//import SubList from '../NewComponent/Reusable Component/SubList';

function MealDetailScreen({ route }) {
    const navigation = useNavigation();
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const favouriteMealCtx = useContext(FavouriteContext)

    const mealIsFavourite = favouriteMealCtx.id.includes(mealId);


    function changeFavouriteStatusHandler() {
        if(mealIsFavourite){
            favouriteMealCtx.removeFavourite(mealId)
        }
        else{
            favouriteMealCtx.addFavourite(mealId)
        }   
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                onPress={changeFavouriteStatusHandler}
                 icons={ mealIsFavourite ? 'star' : 'start-outline'} 
                 color="white" />
            }
        })

    }, [navigation, changeFavouriteStatusHandler])
    return (
        <View>
            <ScrollView>
                <Pressable>
                    <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{selectedMeal.title}</Text>
                    <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
                        style={styles.detailText} />
                    <View style={styles.listOutContainer}>
                        <View style={styles.listContainer}>
                            <SubTitle>Ingredients</SubTitle>
                            <View style={styles.listItemText}>
                                <Text style={styles.itemText}>{selectedMeal.ingredients}</Text>
                            </View>
                            <SubTitle>Steps</SubTitle>
                            <View style={styles.listItemText}>
                                <Text style={styles.itemText}>{selectedMeal.steps}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.subTitle}>Duration is {selectedMeal.duration} minutes</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 8
    },
    detailText: {
        color: 'white',
    },
    listItemText: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351420',
        textAlign: 'center'

    },
    listContainer: {
        margin: 40,
        width: '80%'
    }
})

export default MealDetailScreen;