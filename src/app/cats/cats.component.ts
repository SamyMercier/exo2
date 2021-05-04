import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats = [
    {nom : "Oreo", couleurs : ["noir", "blanc"], pellage : "tacheté", age : 2},
    {nom : "Odin", couleurs : ["gris", "blanc"], pellage : "tigré", age : 4},
    {nom : "Morphé", couleurs : ["gris", "blanc"], pellage : "tigré", age : 7}
  ]

  myStyles = { 
    divPrincipal :
      {
      border : "1px solid black",
      width : "500px",
      display : "flex",
      flexDirection : "column",
      alignItems : "center"
      },
    divNom : 
    {
      width : "100%",
      borderBottom : "1px solid black",
      display : "flex",
      justifyContent : "center"
    }  

  }

  constructor() { }

  ngOnInit(): void {
  }

  doAction = (cat,action) => {
    alert(`${cat.nom} ${action}`);
  }

  randomAction = () =>{
    let listOfActions = [
      "vous fait un câlin",
      "miaule",
      "mange son pâté",
      "fait ces besoins sur vos chaussures",
      "se frotte à vos jambes"
    ];
    let pickRandomNumber = Math.floor(Math.random()*listOfActions.length);
    return listOfActions[pickRandomNumber];
  }

}
