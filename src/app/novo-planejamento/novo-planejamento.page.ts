import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  salvar(form) {
    const nomePlaneja = form.value.nome;
    const faturaPlaneja = form.value.faturamento;
    const custoPlaneja = form.value.custo;

    console.log(nomePlaneja, faturaPlaneja, custoPlaneja)

    form.reset();

    this.nav.back();
  }

}
