import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerCadastro, CadastroMain } from './styles';
import Header from '../../Components/Header';

const Caracter = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3250/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/Login');
      } else {
        alert('Erro ao cadastrar.');
      }
    } catch {
      alert('Erro de conexão.');
    }
  };

  return (
    <ContainerCadastro>
      <Header />
      <CadastroMain>
        <h1>
          Cadastre sua conta para ouvir
        </h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <label htmlFor="Email">E-mail:</label>
            <input
              type="email"
              id="Email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="Senha"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </CadastroMain>
    </ContainerCadastro>
  );
};

export default Caracter;