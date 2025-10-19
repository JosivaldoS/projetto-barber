import styles from './telaDeLogin.css'

export default function TelaDeLogin() {
    return(
        <>
            <form>
                <h1>Login</h1>
                <div className='inputNome'>
                    <label id="nomeCliente" >Digite seu Nome</label>
                    <input id="nomeCliente" ></input>
                </div>
                
                <div className='inputTelefone'>
                    <label id="numeroTelefone">Digite seu Número</label>
                    <input id="numeroTelefone" type="number"></input>
                </div>

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}
