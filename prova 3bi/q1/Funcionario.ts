export class Funcionario {
    private _nome: string;
    _salario: number;
    private _cargo: string
  
    constructor(nome: string, salario: number, cargo: string) {
      this._nome = nome;
      this._salario = salario;
      this._cargo = cargo
    }
  
    get nome(): string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }
    get salario(): number { return this._salario; }
    get cargo(): string {return this._cargo}
    set cargo(cargo: string) { this._cargo = cargo; }

    descricao() : void {
      `Nome: ${this._nome},\n Salário: ${this._salario.toFixed(2)},\n Cargo ${this.cargo}`;
      }
  }