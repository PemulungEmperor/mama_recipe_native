import React, {useState, useCallback, useRef} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoRecipe = ({videoId}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <View style={{marginHorizontal: 30}}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
        allowWebViewZoom={true}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};

export default VideoRecipe;
