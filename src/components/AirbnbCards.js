import blackstar from "../img/airbnb/star_black.png"

const AirbnbCards = (props) =>{
    return (
        <div>
            <img id = "airbnb1" src={props.image} alt="img"/>
            <div class="name">
                <p id="title1">{props.title}</p>
                <img id="star1"src={blackstar} height="20px" alt="1"/>
                <p id = "reviws1">{props.reviews}</p>
            </div>
            <p id="subtitle">{props.subtitle}</p>
        </div>
    );
};

export default AirbnbCards;