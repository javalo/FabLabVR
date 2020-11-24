import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import VideoModule from 'VideoModule'
import { connect, changeRoom } from './store'
export  class Buttons extends React.Component {

   //player = VideoModule.createPlayer('myplayer');


  clickHandler(roomSelection){ 
    changeRoom(roomSelection);
   }
/*      
// Play a specific video
this.player.play({
  source: {url: asset('boa.mp4').uri,}, // provide the path to the video
  muted: false // optionally, supply the format of the video
});
// Display the background video on the Environment
Environment.setBackgroundVideo('myplayer', {
  rotateTransform: [{rotateY: '180deg'}] 
});

*/

  createRoomButtons(adjacentRooms){
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room =>(
      buttons.push(<VrButton key={`${room}` + '-button'}
      onClick={()=> this.clickHandler(room)}
      >
        <Text style={{backgroundColor:'green'}}>{room}</Text>
      </VrButton>)
    ));
    return buttons;
  }
  render() {
    return (
      <View style={styles.panel}>

        <View style={styles.greetingBox}>
          <Text>
            Room Selection
          </Text>
          <Text>
            { this.props.room}
          </Text>
          {this.createRoomButtons(this.props.adjacentRooms)}
        </View>
      </View>
    );
  }
};



export class HouseInfoPanel extends React.Component {

  //player = VideoModule.createPlayer('myplayer');
 



    
/*      
// Play a specific video
this.player.play({
 source: {url: asset('boa.mp4').uri,}, // provide the path to the video
 muted: false // optionally, supply the format of the video
});
// Display the background video on the Environment
Environment.setBackgroundVideo('myplayer', {
 rotateTransform: [{rotateY: '180deg'}] 
});

*/

 render() {
   return (
     <View style={styles.panel}>

    
       <View >
         <Text>
           Room Info
         </Text>
         <Text >
         {this.props.info}
         </Text>
       </View>

     </View>
   );
 }
};

const connectedButtons = connect(Buttons);
const connectedHouseInfoPanel = connect(HouseInfoPanel);

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    flexDirection: 'row',
  
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
   
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  
});

AppRegistry.registerComponent('connectedButtons', () => connectedButtons);
AppRegistry.registerComponent('connectedHouseInfoPanel', () => connectedHouseInfoPanel);
