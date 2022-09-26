import AirbnbCards from "./AirbnbCards";
import airbnb1 from "../img/airbnb/abnb_img1.png"
import airbnb2 from "../img/airbnb/abnb_img2.png"
import airbnb3 from "../img/airbnb/abnb_img3.png"
import airbnb4 from "../img/airbnb/abnb_img4.png"

const Airbnb = () =>{
    return(
        <div class ="container">
            <AirbnbCards 
            image ={airbnb1}
            title = "Island - Badachro"
            reviews = "4,72"
            subtitle = "Nature Observatory Secluded Island"
            />
            <AirbnbCards 
            image ={airbnb2}
            title = "Loft - Edinburgh"
            reviews = "4,99"
            subtitle = "Classical Apartment on the Royal Mile"
            />
            <AirbnbCards 
            image ={airbnb3}
            title = "Tiny home - Drimnim"
            reviews = "4,95"
            subtitle = "Unique and Secluded"
            />
            <AirbnbCards 
            image ={airbnb4}
            title = "Hut - Sutton"
            reviews = "4,93"
            subtitle = "Unique glamping experience"
            />
        </div>
    );
};

export default Airbnb;