import Footer from './Footer' 

export default function About(){
    return(
        <>
        <div className='about'>
            <div className='wrapper font-weight-bold mx-auto'>
                <br />
                <h1 className='ml-3 font-weight-bold'>
                    What is Khana's?
                </h1>
                <h4 className='mt-4 ml-3 about-details'>
                Khana's is the first and largest restaurant chain in<br/>
                Bangladesh, serving over a lot of customers daily in<br/>
                Dhaka across 7 outlets as of 2020. Although Khana's is<br/>
                best known for its Sub-sandwich, Naga wings, and<br/>
                Potato Wedges, they also feature chicken products,<br/>
                breakfast items, and their famous Cold Coffee.
                <br/><br/><br />
                {/* <Link to='about'><button className='btn btn-warning font-weight-bold'>MORE ABOUT KHANAN'S</button></Link>  */}
                </h4>
            </div>
        </div>
        <Footer />
        </>
    )
}