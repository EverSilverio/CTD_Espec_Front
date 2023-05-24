## react-query:

### instalar:

```
yarn add react-query
``` 

### importar:

``` import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query' 
```

## axios

### instalar:

```
yarn add axios
```

Criar pasta "services" importando e instanciando o axios.create:

Exemplo:
```
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-aluno.vercel.app",
});

export default api;
```

Criar pasta request para incluir todos os endpoints que serão acessados nas requisições da API:

```
import api from "../services/api";

export default async function getAlunos() {
  return (await api.get("/aluno")).data;
}
```
