import {View, Text, Pressable, StyleSheet} from "react-native";
import React from "react";

export type PrimaryButtonProps = {
    children?: any;
};

const PrimaryButton = ({children}: PrimaryButtonProps) => {
    const handlePress = () => {
        console.log("pressed!!!");
    };

    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={handlePress}
                       android_ripple={{color: '#640233'}}
                       style={({pressed}) =>
                           pressed ?
                               [styles.buttonInnerContainer, styles.pressed] :
                               styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#4e0329',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // android only
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});
