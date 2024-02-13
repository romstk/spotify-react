import CardsContainer from '../CardsContainer/CardsContainer';
import '../OfferList/OfferList.css'; 

const OfferList = ()=> {
    return (
        <div className="offer__scroll-container">
            <div className="offer__list">    
                    {/*
                    Farei um componente CardContainer que vai montar uma lista de cards trazendo os estaticamente os principais cards. 
                    Depois implementarei a busca conforme o filtro da página com a busca dinâmica, sendo que ao buscar vai limpar o container de cards e mostrar somente os resultados da busca. 
                    */}
                    <CardsContainer />
            </div>
        </div>    
    )
};

export default OfferList