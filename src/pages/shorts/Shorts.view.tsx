// Generated with util/create-view.js
import React from 'react';
import {Button, View} from 'react-native';

import { ShortsViewProps } from './Shorts.types';
import  styles  from './Shorts.styles';
import { useYoutubeTheme } from '../../providers/YoutubeThemeProvider';
 
const ShortsView: React.FC<ShortsViewProps> = (props) => {

  const themeObj = useYoutubeTheme()

  return (
    <View>
      <Button
        title="Shorts"
        onPress={() => {
          themeObj.toggleTheme()
        }}
        color={themeObj.theme.colors.primary}
        accessibilityLabel="Shorts Button"
      />
    </View>
  )
};

export default ShortsView;
