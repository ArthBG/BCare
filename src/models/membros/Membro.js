import { v4 as uuidv4 } from "uuid";

export class Membro {
  constructor(nome, idade, descricao, imagem, cargo) {
    this.id = this.generateId();
    this.nome = nome;
    this.idade = idade;
    this.descricao = descricao;
    this.imagem = imagem;
    this.cargo = cargo;
  }

  generateId() {
    return uuidv4();
  }
}