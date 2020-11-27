import {ReactInstance, Surface} from 'react-360-web';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();


function init(bundle, parent, options = {}) {

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(
    350,
    400,
    Surface.SurfaceShape.Flat
  );

  buttonsPanel.setAngle(
   -0.6,
    0.1
  );

  r360.renderToSurface(
    r360.createRoot('ConnectedButtonInfoPanel'),
    buttonsPanel
  );

  const infoPanel = new Surface(
    350,
    400,
    Surface.SurfaceShape.Flat
  );

  infoPanel.setAngle(
    0.6,
    0.1
  );
  
  r360.renderToSurface(
    r360.createRoot('ConnectedHouseInfoPanel'),
    infoPanel
  );

  // Load the initial environment


  
  // Play a specific video
/*this.player.play({
  source: {url: asset('./videos/360_go_up.mp4').uri,}, // provide the path to the video
  muted: false // optionally, supply the format of the video
});
// Display the background video on the Environment
Environment.setBackgroundVideo('myplayer', {
  rotateTransform: [{rotateY: '180deg'}] 
});
*/

  r360.compositor.setBackground(r360.getAssetURL('enter.jpg'));
}

window.React360 = {init};
