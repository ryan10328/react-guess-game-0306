import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const GameScreen = () => {
    const local = useLocalSearchParams();
    return (
        <View>
            <Text>GameScreen: {local.id}</Text>
        </View>
    )
}
export default GameScreen;
