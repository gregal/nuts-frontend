import logo from '../../img/logo.svg';
import '../Welcome.css';

export function WelcomeStep1( /*props:Props*/ ) {

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
            </header>
        </div>
        </>
    )

}