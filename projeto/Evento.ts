// Evento.ts
import { Local } from './Local';
import { Organizador } from './Organizador';

export class Evento {
  nome: string;
  data: string;
  local: Local;
  organizador: Organizador;

  constructor(nome: string, data: string, local: Local, organizador: Organizador) {
    this.nome = nome;
    this.data = data;
    this.local = local;
    this.organizador = organizador;
  }
}
