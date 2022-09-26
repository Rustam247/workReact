import UdemyCard from "./UdemyCard";
import udemy1 from "../img/udemy/udemy_img1.png"
import udemy2 from "../img/udemy/udemy_img2.png"
import udemy3 from "../img/udemy/udemy_img3.png"

const Udemy = () =>{
   return(
        <div className = "containers">
            <UdemyCard image = {udemy1}
            title = "The Complete 2022 Web Development BootCamp" 
            author = "Dr Angela Yu" 
            score = "4.7  "
            reviews = "(224,949)"
            price = "£19.99"
            priceBefore = "£69.99"
            sell = "Bestseller"
            />
            <UdemyCard image = {udemy2}
            title = "100 Days of Code: The Complete Python Pro Bootcamp for 2022" 
            author = "Dr Angela Yu" 
            score = "4.7  "
            reviews = "(139,610)"
            price = "£17.99"
            priceBefore = "£59.99"
            sell = "Bestseller"
            />
            <UdemyCard image = {udemy3}
            title = "Ultimate AWS Certified Solutions Architect Assosiate" 
            author = "Stephane Maarek" 
            score = "4.7  "
            reviews = "(145,685)"
            price = "£17.99"
            priceBefore = "£59.99"
            sell = "Bestseller"
            />
        </div>
    )
}

export default Udemy;