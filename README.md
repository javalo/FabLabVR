# FabLabVR

    ## Table of contents
* [PARTICIPANTS](#PARTICIPANTS)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Comment](#Comment-configurer-votre-visite)


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
  La simulation de visite se faisant sur un navigateur, nous avons choisit la technologie React360, car
  il s'agit d'une technologie créé à partir de webXR et qu'elle convient au support que l'on va utiliser.
  
  On a fait le choix d'utiliser une caméra de modèle GEAR360 de SAMSUNG, afin de pouvoir filmer la 
  scène à 360°.
  
  
  ---  
  
  ####  Detaillées du fonctionnement :

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

## Detaillées du code
Project is created with:
* #### index.js: 
C'est le code principal de votre application, c'est là que réside tout votre code React. C'est le code qui rend votre application unique et qui détermine son apparence. Tout code importé par index.jsfera également partie de votre application, vous permettant d'organiser votre application dans de nombreux fichiers différents.    

* #### client.js: 
C'est le code qui connecte votre navigateur à votre application React - le Runtime . Ce fichier fait trois choses. Tout d'abord, il crée une nouvelle instance de React 360, chargeant votre code React et l'attachant à un endroit spécifique dans le DOM. C'est également là que votre application peut passer une variété d'options d'initialisation

* #### index.html: 
Il s'agit de la page Web que vous chargez lors de la visualisation de votre application. Tout ce qu'il fait, c'est fournir un point pour monter votre code JavaScript. C'est intentionnel. La plupart des fonctionnalités sont laissées en dehors du HTML, de sorte que vous pouvez facilement intégrer votre application React 360 dans des pages de rendu serveur ou des applications Web existantes.


* #### FabLabData.js: 
Ce ficher a ete ajouter pour nos propres besoin, ce fichier est tres import donc il y a les informations comme ( nom de sale, les details sur la salle et plus important les nom des video et les lien sans sans l'application de fonctionne pa.
donc c'est  un fichier js qui contient des objects des Salles avec leurs noms,  videos , info qu ils contients et les lien ver les autre salles. 


* #### Store.js: 
Ce fichier nous permet de suivre le click des boutons, ce qu'il faut afficher et comment changer le background avec la video qu'il faut.
Le Store.js acced aussi au donner qui se trouve dans le fichier FabLabData.js et store les objets dans un globale store ( STATE ) qui contient les donners comme le nnom de la salle, la description et les salles connect a celui ci. 


---------
	
## Comment Configurer votre propre visit
En changeant just le fichier FabLabData.js, ce fichier est structuré avec des objets chaque est considérée comme une pièce qui contient le nom de la pièce la description et les pièces connectées a celle-ci ( les pièces connect sont les noms des videos )
##### Remarque : 
      les vidéos sont traiter dans Store.js, il sont de format mp4 ( nom_de_la_video.mp4 )
       et commence par le préfixe 360_ suivi du même e nom qui se trouve dans le fichier FabLabData.js

---------
	
## Setup
Pour Installer le Projet Telecharger ou le cloner dans votre machine puis allez dans le dossier FabLab360 et lancer les commendes npm:

```
$ cd ../FabLab360
$ npm install
$ npm start
```

## démonstration sur youtube 
https://www.youtube.com/watch?v=d51KQuF39PM
