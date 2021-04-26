
export default function Product({ prodName, imgSrc, text}) {
    return (
        <div className={`col-md-4`}>
            <div className={`card p-2`} style={{width: 300 }}>
                <img className={`card-img-top img-fluid`} src={imgSrc}/>
                <div className='card-body'>
                    <h3>{prodName}</h3>
                    <p className='card-text'>
                        {text}
                    </p>
                    <a href="#" class="btn btn-primary">See More..</a>
                </div>
            </div>
        </div>
    )
}