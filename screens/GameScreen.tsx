import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'

export type GameScreenProps = {
    id: string | null;
}

const GameScreen = ({id}: GameScreenProps) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Text>Opponent's Guess {id}</Text>
            {/*Guess*/}
            <View>
                <Text>Higher or lower?</Text>
            </View>

        </SafeAreaView>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {}
});
