import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import house from './data/houseData'
import VideoModule from 'VideoModule'

export  class Buttons extends React.Component {

   //player = VideoModule.createPlayer('myplayer');
  state={
    room: house.House.roomName,
    info: house.House.info,
    adjacentRooms: house.House.adjacentRooms,
  }

  clickHandler(roomSelection){
      this.setState({

       
          room: house[`${roomSelection}`].roomName,
          info: house[`${roomSelection}`].info,
          adjacentRooms: house[`${roomSelection}`].adjacentRooms,
      
      })

     
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



      Environment.setBackgroundImage(asset(`./360_${house[`${roomSelection}`].img}`));
  }

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
          <Text >
            Room Selection
          </Text>
          <Text>
            { this.state.room}
          </Text>
          {this.createRoomButtons(this.state.adjacentRooms)}
        </View>


        <View style={styles.greetingBox}>
          <Text>
            Room Info
          </Text>
          <Text >
          {this.state.info}
          </Text>
        </View>

      </View>
    );
  }
};



export class InfoPanel extends React.Component {

  //player = VideoModule.createPlayer('myplayer');
 state={
   room: house.House.roomName,
   info: house.House.info,
   adjacentRooms: house.House.adjacentRooms,
 }

 clickHandler(roomSelection){
     this.setState({

      
         room: house[`${roomSelection}`].roomName,
         info: house[`${roomSelection}`].info,
         adjacentRooms: house[`${roomSelection}`].adjacentRooms,
     
     })

    
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



     Environment.setBackgroundImage(asset(`./360_${house[`${roomSelection}`].img}`));
 }

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
         <Text >
           Room Selection
         </Text>
         <Text>
           { this.state.room}
         </Text>
         {this.createRoomButtons(this.state.adjacentRooms)}
       </View>


       <View style={styles.greetingBox}>
         <Text>
           Room Info
         </Text>
         <Text >
         {this.state.info}
         </Text>
       </View>

     </View>
   );
 }
};




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

AppRegistry.registerComponent('Buttons', () => Buttons);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
