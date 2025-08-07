import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Adicione esta linha
import { ContainerLogin, MainLogin } from './styles';
import Header from '../../Components/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Adicione esta linha

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3250/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha }),
            });
            if (response.ok) {
                alert('Login realizado com sucesso!');
                navigate('/HomeMusic'); // Redireciona após login
            } else {
                alert('E-mail ou senha inválidos.');
            }
        } catch {
            alert('Erro de conexão.');
        }
    };

    return (
        <ContainerLogin>
            <Header />
            <MainLogin>
                <h1>
                    Conecte-se para ouvir
                </h1>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
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

                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </MainLogin>
        </ContainerLogin>
    );
};

export default Login;