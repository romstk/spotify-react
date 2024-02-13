import '../Header/Header.css';
import smallRigth from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';
import { useState } from 'react';





const Header = (props) => {
    
    const [busca, setBusca] = useState('')

    /**
    * Esta função é chamada a cada mudança no input
    */
    const aoDigitado = (evento) => {

        //Captura o valor atual do input 
        const valorAtualDoInput = evento.target.value
        
        /*
        Chama a função de retorno de chamada passada do componente pai
        Como no pai estou passando uma função, aqui recebo ela e passo um parâmetro fazendo com que ela atualize o termo de busca no pai
        */
        props.onInputChange(valorAtualDoInput)
        //Atualiza o state com o valor atual
        setBusca(valorAtualDoInput)
        
    }

    return(

        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    
                    <img src={smallLeft} alt="Seta esquerda"/>
                </button>
                <button className="arrow-left">
                    <img src={smallRigth} alt="Seta direita"/>
                </button>

                <div className="header__search">
                    <img src={search} alt=""/>
                    <input 
                        id="search-input" 
                        type="text" 
                        placeholder={props.placeholder}
                        onChange={aoDigitado}
                    />
                </div>
                
            </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
        </nav>
    )
}

export default Header