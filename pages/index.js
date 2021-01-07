import { useState } from 'react'

function Home() {
    return <div>
        <h1>Página Inicial</h1>
        <h2>Você está na branch de teste</h2>
        <div> Testando as ferramentas da Vercel enquanto isso...</div>

        <Contador />
        <div>Teste</div>
         </div>
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>

    )
}

export default Home