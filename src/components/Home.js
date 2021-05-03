import {Link} from 'react-router-dom'
import slider1 from './slider-1.png'
import slider2 from './slider-2.png'
import slider3 from './slider-3.png'
import CardInfo from './CardInfo'
import Footer from './Footer'

const text1 = `Khana’s specializes in fast food, such as \nNaga Wings Barrel, Potato Wedges, and\nperi-peri style chicken dishes.\n`
const text2 = `Dishes on our menu can be suited to\npersonal preference. some exceptions\nmay apply\n`
const text3 = `Parties, Meetings, or that special get\ntogether – Khana’s for all occasions!\nPlease Contact Us\n`
export default function(props) {
    return (
        <div>
            <div className='home mx-auto'>
                <div className='wrapper font-weight-bold'>
                    <br />
                    <h1 className='ml-3 font-weight-bold'>
                        Bet you can't eat less
                    </h1>
                    <h4 className='mt-4 ml-3 about-details'>
                    Khana’s is the first Bangladeshi Restaurant chain<br/>
                    that specializes in fast food, such as Naga Wings<br/>
                    Barrel, Potato Wedges, and peri-peri style chicken<br/>
                    dishes etc.<br/><br/><br />
                    <Link to='about'><button className='btn btn-warning font-weight-bold'>MORE ABOUT KHANAN'S</button></Link> 
                    </h4>
                    <br /><br /><br /><br /><br /><br />
                </div>
                <br /><br /><br />
                <div id="carouselExampleIndicators" className="carousel slide" data-pause="false" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={slider1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slider3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br /><br />
                <div className='row'>
                    <CardInfo header='Fast food' text={text1} /> 
                    <CardInfo header='Modern' text={text2} /> 
                    <CardInfo header='Catering' text={text3} /> 

                </div>
            </div>
        <Footer />
        </div>
    )
}