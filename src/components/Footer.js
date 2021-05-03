import {Link} from 'react-router-dom'
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
                            <li><Link to="home" className="text-white">Home</Link></li>
                            <li><Link to="products" className="text-white">Products</Link></li>
                            <li><Link to="locations" className="text-white">Locations</Link></li>
                            <li><Link to="About" className="text-white">About</Link></li>
                        </ul>
                    </div>
                    <div className='col-sm text-white'>
                        <h3 className='h3 mb-3 px-4'>Get in Touch</h3>
                        <ul>
                            <li className="social"><Link to="#"><img src={FB} alt=""/></Link></li>
                            <li className="social"><Link to="#"><img src={IG} alt=""/></Link></li>
                            <li className="social"><Link to="#"><img src={YT} alt=""/></Link></li>
                            <li className="social"><Link to="#"><img src={YELP} alt=""/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}