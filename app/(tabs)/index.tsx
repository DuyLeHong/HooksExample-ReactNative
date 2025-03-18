import { Image, StyleSheet, Platform, View, Text, Button, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useRef, useState } from 'react';

export default function HomeScreen() {
  // render lại cả function
  console.log('render lại cả function')
  const [count, setCount] = useState(0);

  const [inforUser, setInforUser] = useState({
    name: 'Nguyen Van Long',
    age: 20,
  });


  const handleIncrease = () => {
    setCount(count + 5);
  };

  const updateInforUser = () => {
    setInforUser({
      ...inforUser,
      age: 21,
      name: 'Phu Le'
    });
  };

  useEffect(() => {
    console.log('useEffect này chạy mỗi lần component render');
  });

  useEffect(() => {
    console.log('useEffect chỉ chạy lần đầu tiên khi component render');
  }, []); // giong voi onStart, onCreate trong Android

  useEffect(() => {
    console.log('useEffect khởi chạy khi bien thay đổi giá trị');
  }, [inforUser, count]);

  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
    
  }, [count]);

  // console.log(
  //   'prevCount = ', prevCount.current, 'count = ', count
  // );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textCount}>{count}</Text>
        <Button title="Tăng" onPress={handleIncrease} />

        <Text style={styles.textCount}>{inforUser.name} - {inforUser.age}</Text>

        <Button title='Update Info User' onPress={updateInforUser} />
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCount: {
    fontSize: 40
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
