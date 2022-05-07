import { MEALS } from '../NewData/dummy-data'
import { CATEGORIES } from '../NewData/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../NewComponent/MealItem';
import { useLayoutEffect } from 'react';

function MealOverViewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayItem = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0;
    })

    function renderMealItem(itemData) {
        const item = itemData.item
        const mealItemProps = {
            id:item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            ingrident: item.ingrident,

        }
        function pressHandler() {
            navigation.navigate('MealDetailScreen')
        }

        
        return <MealItem {...mealItemProps}  onPress={() => pressHandler()}  />
       
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
            ).title;
        navigation.setOptions({
            title:categoryTitle
        })},[catId,navigation ]
    );

    return <View>
        <FlatList
            data={displayItem}
            keyExtractor={(itemId) => itemId.id}
            renderItem={renderMealItem}
          
        />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealOverViewScreen;