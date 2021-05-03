import Burgers from './burgers.webp'
import Pizza from './pizza.jpg'
import Steak from './steak.jpg'
import Product from './Product'
import Footer from './Footer'

export default function Products() {
    const burgText = "We have the delicous burgers in town different vairities of burgers lorem ipsum dolor sit amot.."
    const pizzaText = "We have the delicous pizzas in town different vairities of pizza lorem ipsum dolor sit amot.."
    const steakText = "We have the delicous steaks in town different vairities of steaks lorem ipsum dolor sit amot.."
    return (
        <>
        <div className='row'>
            <div className={`col-md-8 offset-md-2`}>
                <h2>Products/Menus</h2>
                <hr />
                <p>
                Khana’s predominantly sells Sub-Sandwiches, various
                types of chicken, Potato Wedges, and their famous cold
                coffee. Since Khana’s started its journey, it has
                streamlined the menu which in Dhaka contained nearly
                20 items. The company has also looked to introduce
                healthier options and removed excessive unhealthy
                things. The company has also removed artificial
                preservatives from Chicken items.<br/>
                </p>
                <div className='row'>
                    <Product prodName='Burgers' imgSrc={Burgers} text={burgText} />
                    <Product prodName='Pizza' imgSrc={Pizza} text={pizzaText} />
                    <Product prodName='Steak' imgSrc={Steak} text={steakText} />
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    )
}