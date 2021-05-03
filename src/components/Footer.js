import Footerbg from './footer-bg-1.jpg';
import LogoWhite from './logo-white.png'
import FB from './facebook.png'
import IG from './instagram.png'
import YT from './youtube.png'
import YELP from './yelp.png'

export default function Footer(props) {
    return(
        <div className='footer' >
            <div className='contaier py-4'>
                <div className='row'>
                    <div className="col-sm">
                        <img className='' src={LogoWhite} />
                    </div>
                    <div className='col-sm lol text-white px-4'>
                        <h3 className='h3'>Useful Links</h3>
                        <hr />
                        <ul>
                            <li><a href="/home" className="text-white">Home</a></li>
                            <li><a href="/products" className="text-white">Products</a></li>
                            <li><a href="/locations" className="text-white">Locations</a></li>
                            <li><a href="/About" className="text-white">About</a></li>
                        </ul>
                    </div>
                    <div className='col-sm text-white'>
                        <h3 className='h3 mb-3 px-4'>Get in Touch</h3>
                        <ul>
                            <li className="social"><a href="#"><img src={FB} alt=""/></a></li>
                            <li className="social"><a href="#"><img src={IG} alt=""/></a></li>
                            <li className="social"><a href="#"><img src={YT} alt=""/></a></li>
                            <li className="social"><a href="#"><img src={YELP} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}