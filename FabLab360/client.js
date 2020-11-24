// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });


  const buttonsPannel = new Surface(
    400, 
    550,
     Surface.SurfaceShape.Flat
     );

     buttonsPannel.setAngle(
      -0.6,
      0.1
    )


     

  r360.renderToSurface(
    r360.createRoot('connectedButtons', { /* initial props */ }),
    buttonsPannel
  );





  const infoPannel = new Surface(
    400, 
    550,
     Surface.SurfaceShape.Flat
     );

  
     infoPannel.setAngle(
      0.6,
      0.1
    )

  r360.renderToSurface(
    r360.createRoot('connectedHouseInfoPanel', { /* initial props */ }),
    infoPannel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
}

window.React360 = {init};
