import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text, Alert} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import Unorderedlist from 'react-native-unordered-list';

const Main = () => {
  const [videoP, setVideoP] = useState([]);
  const [output, setOutput] = useState('Hello');

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then(video => {
        setVideoP([...videoP, video.path.toString().split('/')[9]]);
      })
      .catch(e => {
        if (e.toString() == 'Error: User cancelled image selection') {
          Alert.alert(
            'Invalid Selection',
            'There was an issue selecting the video.\n\nPlease try again',
            [
              {
                text: 'Cancel',
              },
            ],
          );
        }
      });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then(video => {
        setVideoP([...videoP, video.path.toString().split('/')[9]]);
        console.log(videoP);
      })
      .catch(e => {
        alert(e);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        {videoP.length !== 0 ? (
          videoP.map((vp, i) => {
            return (
              <Text key={i} style={styles.videoname}>
                {vp}
              </Text>
            );
          })
        ) : (
          <Text style={styles.textInput}>Please Upload/Record a Video</Text>
        )}
      </View>
      <Pressable
        style={styles.commandPressable}
        onPress={choosePhotoFromLibrary}>
        <Text>Gallery</Text>
      </Pressable>
      <Pressable style={styles.commandPressable} onPress={takePhotoFromCamera}>
        <Text>Camera</Text>
      </Pressable>
      <Pressable
        style={styles.add}
        onPress={() => {
          setVideoP([]);
          setOutput('Hello1');
        }}>
        <Text style={{fontSize: 30}}>+</Text>
      </Pressable>
      <View>
        <Text style={styles.textInput}>
          The above signs reveal the following text translation:
        </Text>
        <Text style={styles.textInput}>{output}</Text>
      </View>
    </View>
  );
};

export default Main;

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
  videoname: {
    paddingBottom: 15,
    color: 'black',
    maxWidth: '80%',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  add: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 12,
  },

  textInput: {
    padding: 10,
    color: 'black',
    maxWidth: '80%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
