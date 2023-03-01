import '../Welcome.css';

// type Props = {
//     onAdvance:()=>void
// }

export function WelcomeStep2( /*props:Props*/ ) {

    // function onClickAdvance() {
    //     props.onAdvance()
    // }

    return (
        <>
        <div className="App">
            <header className="App-header">
                <p>
                    Segundo passo: faça isso, faça aquilo
                </p>
                {/* <button onClick={onClickAdvance} >Próximo</button> */}
            </header>
        </div>
        </>
    )

}