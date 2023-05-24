import { useQuery } from "react-query"
import getAlunos from "../../requests/aluno"
import { CiSquareRemove, CiEdit } from 'react-icons/ci';

export default function Table() {
   const {data, isFetching} = useQuery(["@alunos"], getAlunos, {
      refetchOnWindowFocus: false
   })

   const editAluno = function () {
      alert('editar aluno')
   }

   const deleteAluno = function () {
      alert('deletar aluno')
   }

   // enquanto nao houver retorno da API getAlunos sera exibido mensagem "Buscando Alunos..."
   if (isFetching) {
      return <h3>Buscando alunos...</h3>;
   }

   // apos retorno da API getAlunos a tabela será renderizado
   return (
      <>
         {/* <p>{JSON.stringify(data)}</p> */}
         <table>
            <thead>
               <tr>
                  <td>Ordem</td>
                  <td>Nome</td>
                  <td>Matrícula</td>
                  <td>Curso</td>
                  <td>Bimestre</td>
                  <td>Ações</td>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((aluno, i)=> (
                     <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.matricula}</td>
                        <td>{aluno.curso}</td>
                        <td>{aluno.bimestre}</td>
                        <td>
                           <button onClick={deleteAluno} title="Deletar">
                              <CiSquareRemove />
                           </button>
                           <button onClick={editAluno} title="Editar">
                              <CiEdit />
                           </button>
                        </td>
                     </tr>
   
                  ))
               }
            </tbody>
         </table>
      </>
   )
}