
export default class Member {
  constructor(name, age, descripition, image, cargo) {
    this.id = this.generateId();
    this.name = name;
    this.age = age;
    this.descripition = descripition;
    this.image = image;
    this.cargo = cargo;
  }

  generateId() {
    return Math.floor(Math.random() * 1000) + 1;
  }
}