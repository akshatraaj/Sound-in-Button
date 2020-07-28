import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }
  render(){
    return(
   
      <Button color="green" title="Sound Button" onPress={this.playSound}/>
    
    );
  }
}
export default class App extends React.Component {
  render(){
    return(
<View style={{marginTop: 200}}>
<SoundButton />
</View>
    );
  }
  }