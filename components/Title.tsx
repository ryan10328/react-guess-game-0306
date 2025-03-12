import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Title = () => {
    return <Text style={styles.title}>Opponent's Guess</Text>
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    }
});
