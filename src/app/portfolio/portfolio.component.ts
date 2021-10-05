import { Component, OnInit } from '@angular/core';
import { Project } from '../_models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [
      {
        title: "Projet Java",
        subtitle: "Ventes de véhicules",
        img: "././assets/portfolio/project1.png",
        description: "Ce projet a été développé en quelques jours et en utilisant le langage de programmation Java accompagné par le système de gestion de base de données MySQL. J’ai également choisi d’adopter le motif d’architecture Modèle Vue Contrôleur pour réaliser ce projet. <br> Le but initial de ce projet était de permettre aux collectionneurs de véhicules de gérer leur collection. Ces véhicules peuvent être des automobiles, des motos ou bien des camions. Il y a certaines données à propos des véhicules que les collectionneurs doivent obligatoirement enregistrer, ces données sont leurs marques, leurs modèles et leurs couleurs. Et les véhicules appartenant à la collection d’un individu peuvent être mis en vente par ce dernier pour ensuite être acheté par un autre collectionneur à l'aide d'un système de bourse."
      },
      {
        title: "Projet Java",
        subtitle: "War Game",
        img: "././assets/portfolio/project2.PNG",
        description: "L’objectif du projet est de réaliser un jeu de guerre de type WarGames. Ce type de jeu est apparu dans les années 1950. <br> Le développement du Wargame a été réalisé en langage JAVA version 16 sous l’IDE Eclipse et en utilisant la bibliothèque graphique SWING."
      },
      {
        title: "Projet Android Studio",
        subtitle: "Apprentissage des langues",
        img: "././assets/portfolio/project3.png",
        description: "Cette application mobile a pour objectif d’aider toutes personne désirant apprendre une langue étrangère au travers d’un jeu de questions réponses. L’application pose des questions en fonction des connaissances de l’utilisateur et selon la langue qu’il choisit. Ces connaissances sont en fait des mots que l’utilisateur doit renseigner dans une partie spécifique de l’application. C’est donc à l’aide de ces mots que les questions seront posées. Par exemple, si l’utilisateur renseigne le mot computer science, l’application peut lui poser comme question “ Quelle est la traduction du mot computer science ? ”. <br> Le projet a été réalisé en Java 8 à l’aide de l’IDE d’Android Studio."
      },
      {
        title: "Projet Python",
        subtitle: "Crossy Road-Like",
        img: "././assets/portfolio/project4.png",
        description: "Le but du jeu est d'avancer autant que possible à travers des routes sans se faire écraser par les voitures. Pour surmonter ces obstacles, le joueur doit avancer lorsque le chemin est libre. Le joueur joue avec un personnage et appuie sur des touches du clavier pour aller de l'avant. <br> Le projet a été réalisé en Python à l’aide de l’IDE Pyzo."
      },
      {
        title: "Projet Java",
        subtitle: "Terraria-Like",
        img: "././assets/portfolio/project5.png",
        description: "Terraria est un jeu d’aventure où le héros doit survivre dans un open-world en 2D rempli d’ennemis. Pour se faire, il a à sa disposition une pioche afin qu’il puisse miner des minerais ainsi que bien d’autres ressources afin de pouvoir fabriquer des armes. Le héros doit également battre un certain nombre de boss afin de pouvoir terminer le jeu. <br> Le jeu a été réalisé en Java 8, en s’aidant de Scene Builder et en respectant l’achitecure MVC (Model View Controller)."
      },
      {
        title: "Projet C",
        subtitle: "Jeu de dames",
        img: "././assets/portfolio/project6.png",
        description: "Le jeu a été réalisé en C, accompagné de sa bibliothèque graphique sous l’IDE Geany.  L’architecture MVC (Model View Controller) a été appliquée."
      },
      {
        title: "Projet Python",
        subtitle: "Pong",
        img: "././assets/portfolio/project7.png",
        description: "Le jeu est en 2D et repose sur le même principe qu’un jeu de tennis de table. Il peut se jouer contre un ordinateur ou contre un autre joueur humain. Le projet a été réalisé en Python à l’aide de l’IDE Pyzo."
      },
      {
        title: "Projet PHP",
        subtitle: "Site de culture asiatique",
        img: "././assets/portfolio/project8.png",
        description: "Site Web de news. Réalisé à l’aide de PHP7, Bootstrap 4.3.1."
      },
      {
        title: "Projet Python",
        subtitle: "Gestion d'un ciné-club",
        img: "././assets/portfolio/project9.png",
        description: "Ce projet a été développé en utilisant le langage de programmation Java. Le but initial de ce projet était de permettre aux employés d'un ciné-club de gérer les évènements qui y étaient organisés mais aussi la billeterie et les emplois du temps des internes."
      },
      {
        title: "Projet C",
        subtitle: "Jeu Rummikub",
        img: "././assets/portfolio/project10.png",
        description: "Le jeu a été réalisé en C, accompagné de la bibliothèque graphique SDL version 2 sous l’IDE Visual Studio Code.  L’architecture MVC (Model View Controller) a été appliquée."
      }
    ];

    projectsBis: any;

  constructor() {
  }

  ngOnInit(): void {
    this.projectsBis = this.chunks(this.projects, 4);
  }

  chunks(array: Project[], size: number) {
        let results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        console.log(typeof results, results);
        return results;
  }

}
