import '../MainContainer/MainContainer.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import PlayListContainer from '../PlayListContainer/PlayListContainer';
import SearchContainer from '../SearchContainer/SearchContainer';


const MainContainer = () => {

    //declaro uma variável para manter o estado de headerValue, para que eu possa monipular este valor a medida que o input em Header vá sendo atualizado.
    const [headerValue, setHeaderValue] = useState('')
    const [artistasArray, setArtistasArray] = useState([])
    let resultAPI = ''
    

    /*Constante que vai lidar com o input de pesquisa contido dentro de header. Esta constante fará a ligação entre o MainContainer e o Header onde executa a pesquisa e o campo é atualizado.
    A variável value recebe por callback do input contido em header o valor digitado e traz para o elemento Pai o valor para podermos utilizar para manipular os dados e exibir os elementos na tela 
    */

    const headerInputChange = async(value) => {
        // Atualiza o estado do componente pai com o valor recebido do componente filho
        setHeaderValue(value)
        resultAPI = await requestAPI(headerValue)
        setArtistasArray(Object.values(resultAPI))
    } 


    return (
        <div className='main-container'>
            <Sidebar />
            <Header 
                placeholder="O que você quer ouvir ?"
                onInputChange = {headerInputChange}
            />

            { headerValue === '' 
                            ? <PlayListContainer /> 
                            : <SearchContainer 
                                    artistas = {artistasArray}
                                />} 
        </div>
    )
}


async function requestAPI(searchTerm){

    let url = `http://localhost:3000/artists?name_like=${searchTerm}`;

    
    const result  = await fetch(url);
    
    const resultJson = await result.json();
   
    return resultJson;
}

export default MainContainer