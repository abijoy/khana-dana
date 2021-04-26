export default function Location({ mapSrc, outletName }) {
    return (
        <div className={`col-md-4 mb-4`}>
            <div className={`card card-cascade narrower`}>
                <div className={`view view-cascade gradient-card-header blue-gradient`}>
                    <h4 className={`mt-1 mb-0 text-center`}>{outletName}</h4>
                </div>
                <div className={`card-body card-body-cascade text-center`}>
                    <div id="map-container-google-8" className={`z-depth-1-half map-container-5`} style={{ height: 300}}>
                        <iframe src={mapSrc} frameBorder='0' style={{border: 0, allowfullscreen: true}}></iframe>
                    </div>    
                </div>
            </div>
        </div>
    )
}