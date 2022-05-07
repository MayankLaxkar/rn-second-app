import { FlatList, View, Text } from 'react-native';
import CategoryGridTile from '../NewComponent/CategoryGridTile';
import { CATEGORIES } from '../NewData/dummy-data';

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealOverViewScreen', {
                categoryId: itemData.item.id
            })
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => pressHandler()}
        />
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}

export default CategoriesScreen;