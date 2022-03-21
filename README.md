<h1># Alos_act1</h1>

<strong> ALOS TP 1 </strong>
<blockquote>
	
-	Le thème de notre Api : Selling and exchanging used books API
-	Nous avons travaillé sous l’OS Linux (Ubuntu)	
	 
</blockquote>



<h2>Etape1 :</h2>

Nous avons installé NodeJs en lançant la commande :   
$ sudo apt-get install nodejs.
NodeJs est un environnement d'exécution JavaScript qui inclut tout ce dont nous avons besoin pour exécuter un programme écrit en JavaScript en dehors de Google. Ceci est dû au fait qu’il utilise le moteur JSV8 de Google. NodeJs est utilisé pour exécuter des scripts sur le serveur.

<h2>Etape2 :</h2>
Nous avons lancé le terminal sous Linux pour configurer le serveur JSON, en exécutant la commande suivante :
$ npm install -g json-server
Nous devons également installer npm (le gestionnaire de package Node.Js) en lançant la commande :
$ sudo apt install npm 

<h2>Etape3 :</h2> 
Nous sommes passés à la conception de notre API, nous avons fait une modélisation a notre système, nous nous sommes posés ces deux questions : Comment allons-nous construire notre API ?, Quelles ressources nous mettons à disposition avec notre API ?
Nous mettons à disposition trois ressources :

<ol>

<li>Client : C’est celui qui va déposer son livre pour l’échanger avec un autre ou le vendre.  </li>

<li>Livre : Le livre déposé par un client </li>

<li>DepotLivre : Une ressource qui représente une classe-association entre les deux ressources Client et Livre </li>

</ol>

Voici ci-dessous (Fig1) les ressources en format Json


Fig1 : les 3 ressources e notre Api en format Json

Ensuite, nous avons généré du code JSON contenant 100 enregistrements de la ressource livre en utilisant l’outil JSON Generator.  Ensuite nous l’avons sauvegardé en fichier db.json

