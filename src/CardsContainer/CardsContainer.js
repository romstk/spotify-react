import '../CardsContainer/CardsContainer.css'
import img1 from '../assets/playlist/1.jpeg';
import img2 from '../assets/playlist/2.png';
import img3 from '../assets/playlist/3.jpeg';
import img4 from '../assets/playlist/4.jpeg';
import img5 from '../assets/playlist/5.jpeg';
import img6 from '../assets/playlist/6.jpeg';
import img7 from '../assets/playlist/7.jpeg';
import img8 from '../assets/playlist/8.jpeg';
import img9 from '../assets/playlist/9.jpeg';
import img10 from '../assets/playlist/10.jpeg';
import img11 from '../assets/playlist/11.jpeg';
import img12 from '../assets/playlist/12.jpeg';
import img13 from '../assets/playlist/13.jpeg';
import img14 from '../assets/playlist/14.jpeg';
import img15 from '../assets/playlist/15.jpeg'; 

/* COLOR CARDS

const colors = {
    'Color1': 'rgb(0, 100, 80)',
    'Color2': 'rgb(132, 0, 231)',
    'Color3': 'rgb(30, 50, 100)',
    'Color4': 'rgb(140, 25, 50)',
    'Color5': 'rgb(232, 17, 91)',
    'Color6': 'rgb(83, 122, 161)',
    'Color7': 'rgb(142, 102, 172)',
    'Color8': 'rgb(20, 138, 8)',
    'Color9': 'rgb(30, 50, 100)',
    'Color10': 'rgb(233, 20, 41)',
    'Color11': 'rgb(80, 55, 80)', 
    'Color12': 'rgb(216, 64, 0)',
    'Color13': 'rgb(186, 93, 7)',
    'Color14': 'rgb(0, 30, 80)',
    'Color15': 'rgb(60, 30, 80)'



}
FIM COLOR CARDS */



function CardsContainer() {
    
    return (

            <section className="offer__list-item">
            
                {/*CARD 1*/}
                
                    <a href="" className="cards">
                        <div className="cards card1">
                            <img src={img1} alt="" />
                            <span>Boas festas</span>
                        </div>
                    </a>
                    

                {/*CARD 2*/}
                    <a href="" className="cards">
                        <div className="cards card2">
                            <img src={img2} alt="" />
                            <span>Feitos para você</span>
                        </div>
                    </a>

                {/*CARD 3*/}
                <a href="" className="cards">
                    <div className="cards card3">
                        <img src={img3} alt="" />
                        <span>Lançamentos</span>
                    </div>
                </a>

                {/*CARD 4*/}
                <a href="" className="cards">
                    <div className="cards card4">
                        <img src={img4} alt="" />
                        <span>Creators</span>
                    </div>
                </a>

                {/*CARD 5*/}
                <a href="" className="cards">
                    <div className="cards card5">
                        <img src={img5} alt="" />
                        <span>Para treinar</span>
                    </div>
                </a>

                {/*CARD 6*/}
                <a href="" className="cards">
                    <div className="cards card6">
                        <img src={img6} alt="" />
                        <span>Podcasts</span>
                    </div>
                </a>

                {/*CARD 7*/}
                <a href="" className="cards">
                    <div className="cards card7">
                        <img src={img7} alt="" />
                        <span>Sertanejo</span>
                    </div>
                </a>

                {/*CARD 8*/}
                <a href="" className="cards">
                    <div className="cards card8">
                        <img src={img8} alt="" />
                        <span>Samba e pagode</span>
                    </div>
                </a>

                {/*CARD 9*/}
                <a href="" className="cards">
                    <div className="cards card9">
                        <img src={img9} alt="" />
                        <span>Funk</span>
                    </div>
                </a>

                {/*CARD 10*/}
                <a href="" className="cards">
                    <div className="cards card10">
                        <img src={img10} alt="" />
                        <span>MPB</span>
                    </div>
                </a>

                {/*CARD 11*/}
                <a href="" className="cards">
                    <div className="cards card11">
                        <img src={img11} alt="" />
                        <span>Rock</span>
                    </div>
                </a>

                {/*CARD 12*/}
                <a href="" className="cards">
                    <div className="cards card12">
                        <img src={img12} alt="" />
                        <span>Hip Hop</span>
                    </div>
                </a>

                {/*CARD 13*/}
                <a href="" className="cards">
                    <div className="cards card13">
                        <img src={img13} alt="" />
                        <span>Indie</span>
                    </div>
                </a>

                {/*CARD 14*/}
                <a href="" className="cards">
                    <div className="cards card14">
                        <img src={img14} alt="" />
                        <span>Relax</span>
                    </div>
                </a>

                {/*CARD 15*/}
                <a href="" className="cards">
                    <div className="cards card15">
                        <img src={img15} alt="" />
                        <span>Música Latina</span>
                    </div>
                </a>
            </section>

    )
}
export default CardsContainer 