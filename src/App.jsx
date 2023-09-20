
import { Container, Typography } from '@mui/material'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

import { validarCPF, validarSenha } from './models/cadastro'


function App() {

  return (
    <>
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component="h1" align='center'>
        Formulário de Cadastro
      </Typography>
       <ValidacoesCadastro.Provider        
       value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}>
      <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>
    </Container>
    </>
  )
}
function aoEnviarForm(dados) {
  console.log(dados);
}

export default App
