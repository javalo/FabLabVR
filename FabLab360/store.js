import React from 'react';
import { asset, Environment } from 'react-360';
//import house from './data/houseData';
import fab from './data/fabLabData';

import VideoModule from 'VideoModule'
player = VideoModule.createPlayer('myplayer');
const State = {
  room: fab.Fablab.roomName,
  info: fab.Fablab.info,
  adjacentRooms: fab.Fablab.adjacentRooms
}

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function changeRoom(roomSelection) {
  let roomName = roomSelection;

  State.room = roomName;
  State.info = fab[`${roomName}`].info;
  State.adjacentRooms = fab[`${roomName}`].adjacentRooms;

 // Environment.setBackgroundImage(asset(`./360_${house[`${roomName}`].img}`));


  this.player.play({
    source: {url: `http://forefire.univ-corse.fr/brando/data/360/360_${fab[`${roomName}`].vid}`}, // provide the path to the video
    muted: false // optionally, supply the format of the video
  });
  // Display the background video on the Environment
  Environment.setBackgroundVideo('myplayer', {
    rotateTransform: [{rotateY: '180deg'}] 
  });


  updateComponents();



}


export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      room: State.room,
      info: State.info,
      adjacentRooms: State.adjacentRooms
    };

    _listener = () => {
      this.setState({
        room: State.room,
        info: State.info,
        adjacentRooms: State.adjacentRooms
      });
    }

    componentDidMount() {
      listeners.add(this._listener);
    }

    

    render() {
      return (
        <Component
          {...this.props}
          room={this.state.room}
          info={this.state.info}
          adjacentRooms={this.state.adjacentRooms}
        />
      )
    }
  }
}