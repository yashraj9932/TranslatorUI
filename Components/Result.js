import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Result = ({reslt}) => {
  console.log(reslt);
  return (
    <View>
      <Text>{{reslt}}</Text>
    </View>
  );
};

export default Result;
