import { memo, useCallback, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";

export default function Screen3 () {

    const [count, setCount] = useState(0);

    const handleIncrease1 = useCallback(() => {

        setCount(prevCount => prevCount + 1);

    }, []);

    console.log('render lai ca function')

    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

                <Text
                    style={styles.textCount}>{count}</Text>

                <ContentUseCallBack
                    onIncrease={handleIncrease1} />

            </View>
        </SafeAreaView>
    )
};

export const ContentUseCallBack = memo(({ onIncrease }) => {

    console.log('re-render use callback');

    return (

        <View>

            <Text style={styles.textCount}>useCallBack</Text>

            <Button title="Tăng" onPress={onIncrease} />

        </View>

    );

});

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
