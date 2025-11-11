import React from 'react';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { Image, View } from 'react-native';
import { BlurView as DanielBlurView } from '@danielsaraldi/react-native-blur-view';
import { NitroImage } from 'react-native-nitro-image';

function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
      <NitroImage
        resizeMode={'cover'}
        image={{ url: 'https://picsum.photos/id/3/400' }}
        style={{ height: 400 }}
      />
      {/*<View>*/}
      {/*  <Image height={400} source={{ uri: 'https://picsum.photos/id/3/400' }} />*/}
      {/*  <BlurView*/}
      {/*    blurType="dark"*/}
      {/*    blurAmount={60}*/}
      {/*    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}*/}
      {/*  />*/}
      {/*</View>*/}

      <View>
        <Image
          height={400}
          source={{ uri: 'https://picsum.photos/id/3/400' }}
        />
        <DanielBlurView
          targetId={'some-id'}
          type="dark"
          radius={20}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </View>
    </View>
  );
}

export default App;
