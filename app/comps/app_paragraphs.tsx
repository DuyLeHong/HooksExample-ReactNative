import { createContext, useContext } from "react";
import { View, Text, Button } from "react-native";

export const ThemeContext = createContext('light');

export default function Paragraph () {

    const theme = useContext(ThemeContext);

    return (

        <View style={{
            backgroundColor: theme === 'light' ? 'white' :
                'gray', flex: 1
        }}>

            <Text>

                Lớp học React Native là một lớp học tuyệt vời, với những kiến
                thức cực kỳ dễ học và trần đầy yêu thương

            </Text>

        </View>

    );

}