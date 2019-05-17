import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {
    this.planejamentos = []
  }

  planejamentos

  excluir(nome) {
    localStorage.removeItem(nome);
    this.listar();
  }

  listar() {
    this.planejamentos = []

    const tamanhoBD = localStorage.length

    for(let index=0; index < tamanhoBD; index++) {
      const key = localStorage.key(index)
      const planeja = localStorage.getItem(key)
      const planejamento = JSON.parse(planeja)
      this.planejamentos.push(planejamento)
    }

  }

  ionViewDidEnter() {
    this.listar();
  }

}
