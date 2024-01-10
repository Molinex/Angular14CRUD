import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'Pegando valor da Lista 3',
      autoria: 'Molinox supra 3',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Pegando valor da Lista 2',
      autoria: 'Molinox supra 2',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Pegando valor da Lista 3  Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3 Pegando valor da Lista 3',
      autoria: 'Molinox supra 3',
      modelo: 'modelo2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
