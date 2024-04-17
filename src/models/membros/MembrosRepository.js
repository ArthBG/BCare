export class MembrosRepository {
    constructor() {
        this.members = [];
    }

    getMembers() {
        return this.members;
    }

    getMemberById(id) {
        return this.members.find((member) => member.id === id);
    }

    addMember(member) {
        this.members.push(member);
    }

    updateMember(id, nome, idade, descricao, imagem, cargo) {
        const member = this.getMemberById(id);

        if (member) {
            member.nome = nome;
            member.idade = idade;
            member.descricao = descricao;
            member.imagem = imagem;
            member.cargo = cargo;
        }

        return member;
    }

    deleteMember(id) {
        this.members = this.members.filter((member) => member.id !== id);
    }
}