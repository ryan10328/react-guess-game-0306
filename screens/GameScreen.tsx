import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Title from "@/components/Title";

export type GameScreenProps = {
    id: string | null;
}

const GameScreen = ({id}: GameScreenProps) => {
    return (
        <View style={styles.screen}>
            <Title/>
            {/*Guess*/}
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
