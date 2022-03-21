# Alos_act1
ALOS TP 1

-	Le thème de notre Api : Selling and exchanging used books API
-	Nous avons travaillé sous l’OS Linux (Ubuntu)
Etape1 : Nous avons installé NodeJs en lançant la commande :   
$ sudo apt-get install nodejs.
NodeJs est un environnement d'exécution JavaScript qui inclut tout ce dont nous avons besoin pour exécuter un programme écrit en JavaScript en dehors de Google. Ceci est dû au fait qu’il utilise le moteur JSV8 de Google. NodeJs est utilisé pour exécuter des scripts sur le serveur.
Etape2 : Nous avons lancé le terminal sous Linux pour configurer le serveur JSON, en exécutant la commande suivante :
$ npm install -g json-server
Nous devons également installer npm (le gestionnaire de package Node.Js) en lançant la commande :
$ sudo apt install npm 
Etape3 : Nous sommes passés à la conception de notre API, nous avons fait une modélisation a notre système, nous nous sommes posés ces deux questions : Comment allons-nous construire notre API ?, Quelles ressources nous mettons à disposition avec notre API ?
Nous mettons à disposition trois ressources :
	Client : C’est celui qui va déposer son livre pour l’échanger avec un autre ou le vendre.  
	Livre : Le livre déposé par un client 
	DepotLivre : Une ressource qui représente une classe-association entre les deux ressources Client et Livre  
Voici ci-dessous (Fig1) les ressources en format Json

<img width="580" alt="1" src="https://user-images.githubusercontent.com/102021567/159271447-2e86e50e-2b3d-42b7-a32f-96e6978ff1ca.png">
