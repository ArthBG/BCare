import { MembrosRepository } from "../models/membros/MembrosRepository.js";
import { Membro } from "../models/membros/Membro.js";

const membersRepository = new MembrosRepository();

export const getMembers = (req, res) => {
    const members = membersRepository.getMembers();
    if (members.length) {
        return res.status(200).json(members);
    }
    return res.status(200).json({ message: "Não há membros cadastrados" });
};

export const getMember = (req, res) => {
    const { id } = req.params;
    const member = membersRepository.getMemberById(id);

    if (!member) res.status(404).send({ message: "Membro não encontrado!" });

    return res.send(member);
};

export const createMember = (req, res) => {
    const { name, age } = req.body;
    const member = new Member(name, age);

    membersRepository.addMember(member);

    return res.status(201).send(member);
};

export const updateMember = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const member = membersRepository.getMemberById(id);

    if (!member) res.status(404).send({ message: "Membro não encontrado!" });

    membersRepository.updateMember(id, name, age);

    return res.send(member);
};

export const deleteMember = (req, res) => {
    const { id } = req.params;
    const member = membersRepository.getMemberById(id);

    if (!member) res.status(404).send({ message: "membro não encontrado!" });

    membersRepository.deleteMember(id);

    return res.send(member);
};