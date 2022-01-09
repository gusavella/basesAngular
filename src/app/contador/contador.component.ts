import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}}</h1>

    <button (click)="acumular(1)">+1</button>
    
    <span>{{numero}}</span>
    <button (click)="acumular(-1)">-1</button>
    
    `
})
export class ContadorComponent{
    titulo = 'Contador App';
    numero:number=10;
    
  
    acumular(valor:number){
      this.numero+=valor;
    }
    
    
}