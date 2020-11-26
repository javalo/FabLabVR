# FabLabVR

**Version 1.0.0**

##  PARTICIPANTS : CHEIKNA LO, GOUBELLE LUCA, MICHAEL BENISON
#### SUJET : 
  Ce projet consiste à créer une visite virtuelle interractive du Fablab de Corte en Réalité Virtuelle.
  L'utilisateur doit pouvoir visiter le Fablab à partir de son casque VR, il peut choisir divers chemins
  durant sa visite des lieux et regarder autour de lui. Le but du projet est de permettre à l'utilisateur
  de prendre connaissance des lieux directement sur une page d'un navigateur web avec son téléphone, 
  ordinateur où casque VR.
  
---  
  
#### CHOIX TECHNIQUES :
  La simulation de visite se faisant sur un navigateur, nous avons choisit la technologie ReactVR, car
  il s'agit d'une technologie créé à partir de webXR et qu'elle convient au support que l'on va utiliser.
  
  On a fait le choix d'utiliser une caméra de modèle GEAR360 de SAMSUNG, afin de pouvoir filmer la 
  scène à 360°.
  
  
  ---  
  ---  
  
  #### titre explication detaillées du fonctionnement :

On lance le projet et on se trouve dans la première salle de la visite virtuel du 
FabLab de l'Université de Corse à Corte, nous avons un champ de visions à 360
degrés de la salle et nous pouvons également nous déplacer dans les autres salles
du batiment. Nous avons également un éléments qui nous donnes des informations sur 
le matériel présent dans la pièce et un élément qui nous permet de choisir dans quelle
salle nous voulons nours rendre, ce choix est conditionné en fonction de la salle ou nous
trouvons à l'instant t.
Ces différents éléments nous permettent de faire une visite complète du batiment de
manière virtuelle avec la possibilité de parcourir les différentes pièces sans aucunes 
limites comme si le visiteur se trouvait dans le batiment.


--------

#### titre Explication detaillées du code : 

Nous avons plusieurs fichiers qui nous permettent de configurer le projet et de le faire 
fonctionner.
Fablabdate est le fichier qui permet de relier entre elle et ainsi être utiliser pour 
la visite virtuelle du FabLab.
Dans ce fichier chaque video est un objet qui a différents attributs et ces avec ces attributs
que on peut gerer le component reactVR.
Dans le fichier client.js vous allez retrouver les deux surfaces que vous pouvez voir en jaune
pendant l'utilisation du projet.
La première surface vous permet de choisir vos déplacements et la seconde vous donne des informations.
Ces deux surfaces peuvent être gérés avec du code css.



---------

#### titre Comment configurer votre visite : 

On configure la visite avec des liens videos que l'on trouve sur le serveur de l'université.
Ces liens sont des liens videos au format mp4.

  ---  
  --- 

    ## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is simple Lorem ipsum dolor generator.
	
## Technologies
Project is created with:
* Lorem version: 12.3
* Ipsum version: 2.33
* Ament library version: 999
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../FabLab360
$ npm install
$ npm start
```
    
  
#### Explication detaillées du fonctionnement :

On entre dans le fablab et il se lance une vidéo permettant d'acceder à des choix pour aller dans des pieces..
Capture d'ecran de l'image d'acceuil
les choix sont conditionnels, il y a aussi une description...

#### Explication detaillées du code :

on utilise le composant 360 de react.js pour les videos, cela ce trouve dans client.js. 
ont utilise e composant le composant XXX pour ZZZ

  ---  
  
#### Comment configurer votre visite  :

ajouter les liens pour les video dans fablabdata.js avec comme format.. par exemple...

