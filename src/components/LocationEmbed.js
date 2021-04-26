import Location from './Location'
export default function LocationEmbed({ mapSrc }) {

    const mapSrc1 = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.18120063187!2d90.42067811498251!3d23.812154784559066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64d69573381%3A0x1b6904c6ebc86957!2sKhana's%20-%20Bashundhara%20R%2FA!5e0!3m2!1sen!2sbd!4v1611058953748!5m2!1sen!2sbd`
    const mapSrc2 = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8561783666373!2d90.41536801498137!3d23.752507584588365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87ce836e349%3A0x552d8575a3eab953!2sKhana's%20Khilgaon!5e0!3m2!1sen!2sbd!4v1611145302234!5m2!1sen!2sbd`
    const mapSrc3 = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3467253545864!2d90.38873451498374!3d23.877320784526933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c509e0ac30d3%3A0xecc6f998db0a14f7!2sKhana's%20-%20Uttara%20Metro!5e0!3m2!1sen!2sbd!4v1611059164084!5m2!1sen!2sbd`

    return (
        <div className={`outlets text-center`}>
            <h2>We've got you covered! Hop over to any outlet you want..</h2>
            <hr />
            <div className='row'>
                <Location mapSrc={mapSrc1} outletName='Bashundhara R/A'/>
                <Location mapSrc={mapSrc2} outletName='Khilgaon'/>
                <Location mapSrc={mapSrc3} outletName='Uttara Metro'/>
            </div>
        </div>
        
    )
}