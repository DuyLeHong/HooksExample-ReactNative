import React, { createContext, memo, useCallback, useContext, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import Paragraph, { ThemeContext } from "../comps/app_paragraphs";

export default function Screen4() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {

        setTheme(theme === 'dark' ? 'light' : 'dark');

    };

    return (

        <ThemeContext.Provider value={theme}>
            <SafeAreaView style={{ flex: 1 }}>


                <View style={styles.container}>

                    <Text>UseContextScreen</Text>

                    <Button title="Đổi theme" onPress={toggleTheme} />

                    <Paragraph />

                </View>


            </SafeAreaView>
        </ThemeContext.Provider>
    )
};

const styles = StyleSheet.create({
    seperate: {
        height: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCount: {
        fontSize: 40
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
