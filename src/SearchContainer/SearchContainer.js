/*
Este componente será mostrado na tela do site caso seja realizada uma busca, mostrando os dados do resultado da mesma
*/
import '../SearchContainer/SearchContainer.css'


//Search recebe por props um array com o resultado da pesquisa e monta os cards de acordo com os dados recebidos. 
function SearchContainer  (props) {
    const artists = props.artistas
    
    return (
        
        <div id="result-artist" >

            <div className='grid-container'>

                {artists.map( (item, index) => {
                    /* no map uso item e index, pois para o react cada item deve possuir uma key única, então usamos dessa maneira para que o sistema fique adequado */
                        return(
                                <div className="artist-card" key={index}>
                                    <div className='card-img'>
                                        <img 
                                            className='artist-img' 
                                            src={item.urlImg} 
                                            alt="Artist Card" />
                                    </div>
                                    <div className='card-text'>
                                        <a>
                                            <span className='artist-name'>{item.name}</span> 
                                            <span class="artist-categorie">Artista</span>
                                        </a>  
                                    </div>    
                                </div>
                                
                            )  
                    })
                }
            </div>

        </div>
    )
}

export default SearchContainer