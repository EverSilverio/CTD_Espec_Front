import { useState } from "react"
import { useMutation, useQuery } from "react-query";
import getCursos from "../../requests/cursos";

export default function Form() {
   const [formData, setFormData] = useState({
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
   })

   // constante que recebe as queries
   const { data, isFetching } = useQuery(["@cursos"], getCursos, {
      refetchOnWindowFocus: false
   })

   // funcao para salvar aluno
   const salvarAluno = function () {
      alert('salvar aluno');
   }

   // enquanto nao houver o retorno da api getCursos sera renderizado apenas "Carregando"
   if (isFetching) {
      return <h2>carregando...</h2>;
   }
   
   // apos retorno da api getCursos, tela formulário será renderizado
   return (
      <div>
         <input
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
         />
         <input
            placeholder="Matricula"
            value={formData.matricula}
            onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
         />
         <select
            value={formData.curso}
            onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
         >
            {
               data.cursos.map((curso, i) => {
                  return (
                     <option key={i}>{curso.name}</option>
                  )
               })
            }
         </select>
         <input placeholder="Bimestre"
            value={formData.bimestre}
            onChange={(e) => setFormData({ ...formData, bimestre: e.target.value })}
         />
         <input type="button" value="Salvar"
            onClick={salvarAluno}
         />
      </div>
   )
}