import OfferList from '../OfferList/OfferList';
import '../PlayListContainer/PlayListContainer.css'

const PlayListContainer = () => {
    
    return (

        <div className="playlist-container">

            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                {/*Comentário - Dentro da Playlist containner vou chamar o componente OfferList que vai conter os cards que vão mostrar os artists. 
                
                */}
                <OfferList />
            </div>    
        </div>
    )
};

export default PlayListContainer