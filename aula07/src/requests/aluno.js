import api from "../services/api";

export default async function getAlunos() {
   return (await api.get("/aluno")).data;
}