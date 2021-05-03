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
        <div className='container'>
            <h2>Products/Menus</h2>
            <hr />
            <div className='row'>
                <Product prodName='Burgers' imgSrc={Burgers} text={burgText} />
                <Product prodName='Pizza' imgSrc={Pizza} text={pizzaText} />
                <Product prodName='Steak' imgSrc={Steak} text={steakText} />
            </div>
        </div>
        <Footer />
        </>
    )
}