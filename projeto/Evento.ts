import { LocalClass } from './Local';
import { OrganizadorClass } from './Organizador';

export class EventoClass {
  nome: string;
  data: string;
  local: LocalClass;
  organizador: OrganizadorClass;

  constructor(nome: string, data: string, local: LocalClass, organizador: OrganizadorClass) {
    this.nome = nome;
    this.data = data;
    this.local = local;
    this.organizador = organizador;
  }
}
