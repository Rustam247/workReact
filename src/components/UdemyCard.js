import star from "../img/udemy/star_full.png"
import halfStar from "../img/udemy/star_half.png"
const UdemyCard = (props) =>{
    return (
        <div>
            <img id = "udemy1" src = {props.image} alt="img"/>
            <p id = "title">{props.title}</p>
            <p id = "author">{props.author}</p>
            <div class = "scoreRow">
                <p id = "score">{props.score}</p>
                <img src={star} height="20px" alt="1"/>
                <img src={star} height="20px"alt="1"/>
                <img src={star} height="20px"alt="1"/>
                <img src={star} height="20px"alt="1"/>
                <img src={halfStar} height="20px"alt="1"/>
                <p id = "reviews">{props.reviews}</p>
            </div>
            <div class = "pricebefore1"><p id = "price">{props.price}</p><p id = "priceBefore">{props.priceBefore}</p></div>
            <p id = "sell">{props.sell}</p>
        </div>
    );
};


export default UdemyCard;