
export default function({ header, text }) {
    return (
        <div className='col-md-4 mb-4'>
            <div className="card text-white mb-3 card-info">
                <div className="card-header">
                    <h3>&hearts; {header} </h3>
                </div>
                    <div className="card-body">
                        <p className="card-text">
                            {text}
                        </p>
                    </div>
            </div>
        </div>
    )
}