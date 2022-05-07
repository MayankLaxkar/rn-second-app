import { View, Text, StyleSheet } from 'react-native'

function SubTitle({children}) {
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    subTitle:{
        fontSize: 18,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        padding: 6,
        marginHorizontal: 40,
        marginVertical: 8
    },

})

export default SubTitle;