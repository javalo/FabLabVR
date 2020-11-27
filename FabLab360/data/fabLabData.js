export default Fablab = {

  Fablab: {
      roomName: 'Fablab',
      info: `
      * Visite impression 3D   

      *  Laser

      * Visite_atelier`,
      adjacentRooms: ['Enter_principale'],
    },

    Enter_principale: {
      roomName: 'Enter_principale' ,
      info: `
      * Table de découpe  GRAPHTEC FCX2000-60VC

      * Fraiseuse CNC Shopbot PRSalpha

      * Toolbox Outils traditionnels

      * Toolbox Outils traditionnels
      (Scie circulaire, scie plongeante, tour à bois...)`,
      vid: 'output.mp4',
      adjacentRooms: ['Visite_impression_3D', 'Go_down_to_laser',  'Visite_atelier']
  
    },


    Visite_atelier: {
      roomName: 'Visite_atelier' ,
      info: `
      * Table de découpe  GRAPHTEC FCX2000-60VC

      * Fraiseuse CNC Shopbot PRSalpha

      * Toolbox Outils traditionnels

      * Toolbox Outils traditionnels
      (Scie circulaire, scie plongeante, tour à bois...)`,
        vid: 'visite_atelier.mp4',
      adjacentRooms: ['Visite_impression_3D', 'Go_down_to_laser',  'Visite_atelier']
  
    },
  Visite_impression_3D: {
  roomName: 'visite_impression_3D',
  info:`
    * Imprimante 3D ULTIMAKER3.

    * Imprimante 3D Witbox Go!.

    * Imprimante 3D alimentaire Focus byFlow.

    * Les Casques de Réalité Vituelle Oculus Quest & Rift`,
    vid: 'visite_impression_3D.mp4',
  adjacentRooms: ['Go_down_to_laser', 'Visite_atelier', 'Visite_impression_3D']
},

Go_down_to_laser: {
  roomName: 'Go_down_to_laser',
  info:`
    * descente escalier vers atelier laser.`,
    vid: 'go_down_to_laser.mp4',
  adjacentRooms: ['Visite_laser', 'Go_up']
},


Visite_laser: {
  roomName: 'Visite_laser',
  info:`
    * Découpe laser TROTEC SPEEDY400.

    * Tourne Cylindre Pour graveuse laser TROTEC SPEEDY400.`,
    vid: 'visite_laser.mp4',
  adjacentRooms: ['Go_up', 'Visite_laser']
},

Go_up: {
  roomName: 'go_up',
  info:`
    * Retour pièce principale.`,
    vid: 'go_up.mp4',
  adjacentRooms: ['Visite_atelier', 'Visite_impression_3D', 'Go_down_to_laser']
},




}