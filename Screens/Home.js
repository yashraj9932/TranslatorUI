import React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.commandPressable}
        onPress={() => navigation.navigate('Main')}>
        <Text>Lets Go!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commandPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    color: 'white',
    width: '40%',
    marginBottom: 12,
  },

  textInput: {
    padding: 10,
    color: 'black',
  },
});

export default Home;
