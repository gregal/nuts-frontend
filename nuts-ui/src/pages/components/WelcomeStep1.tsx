import logo from '../../img/logo.svg';
import '../Welcome.css';

type Props = {
    onAdvance:()=>void
}

export function WelcomeStep1( props:Props ) {

    function onClickAdvance() {
        props.onAdvance()
    }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Bem vind@ ao Prato Perfeito.
                </p>
                <p>
                    O jeito mais fácil, rápido e gosto de pedir pratos feitos sob medida pra você.
                </p>
                <button onClick={onClickAdvance} >Próximo</button>
            </header>
        </div>
        </>
    )

}