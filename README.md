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

<li><strong>Client</strong> : C’est celui qui va déposer son livre pour l’échanger avec un autre ou le vendre.  </li>

<li><strong>Livre</strong> : Le livre déposé par un client </li>

<li><strong>DepotLivre</strong> : Une ressource qui représente une classe-association entre les deux ressources Client et Livre </li>

</ol>

Voici ci-dessous (Fig1) les ressources en format Json


<strong>Fig1 </strong>: les 3 ressources e notre Api en format Json

Ensuite, nous avons généré du code JSON contenant 100 enregistrements de la ressource livre en utilisant l’outil JSON Generator.  Ensuite nous l’avons sauvegardé en fichier db.json

<h2>Etape4 :</h2> 
Nous avons démarrée le serveur JSON en lançant la commande :
$ json-server --watch db.json  

Cela exécute un serveur local sur le port 3000 et surveille le db.json fichier pour tout changement.  
Ensuite nous avons lancé livre.js en lançant la commande : 
$ node livre.js, cette commande permet d’afficher les enregistrements livre qui sont dans db.json. la figure ci-dessous (Fig2) qui montre le résultat que nous avons obtenu  

 

<strong>Fig 2 </strong>:  résultat obtenu livre.js

<h2>Etape5 : </h2> <strong> Partie Exercice à rendre sur Moodle</strong>

<strong>Réponse de la question 1 </strong>  : Nous avons utilisé le paramètre de filtrage _limit dans l’url : 

var req = unirest("GET", "http://localhost:3000/livre?_limit = 10");

<strong>Réponse de la question 2</strong> : Nous avons défini une fonction m(url) <Cette fonction permet d’afficher seulement les titres de livre qui commence seulement par la lettre m> qui se trouve dans le fichier Qst2.js
Voici ci-dessous (Fig3) le résultat que nous avons obtenu :


<strong>Fig3</strong> : Résultat obtenu après le filtrage

<strong>Réponse de la question 3 :</strong>
Les performances des application WEB peuvent être significativement améliorées en réutilisant les ressources déjà collectées précédemment en utilisant la mise en cache HTTP, car ces dernières réduisent la latence et le trafic du réseau.
L’entête HTTP cache control contient des directives pour la mise en cache tant dans les requêtes que dans les réponses 
no-cache : indique de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande.


