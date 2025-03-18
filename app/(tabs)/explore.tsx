import { StyleSheet, Image, Platform, View, Text, Button, SafeAreaView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { memo, useState } from 'react';

export default function TabTwoScreen() {

  //console.log('Render trang 2')

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };
  const handleIncrease2 = () => {
    setCount2(prev => prev + 1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textCount}>
          {count} - {count2}
        </Text>
        <Button title="Tăng state 1" onPress={handleIncrease} />
        <View style={styles.seperate} />
        <Button title="Tăng state 2" onPress={handleIncrease2} />
        <Content count={count} />
      </View>

    </SafeAreaView>

  );
}
export const Content = memo(({ count } = {}) => {
  console.log('re-render in Content, count =  ', count);
  return (
    <View style={styles.container}>
      <Text>Use memo - CRO102 - MD19301</Text>
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
