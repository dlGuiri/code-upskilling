export default function MainContent({img, title, country, googleMapsLink, dates, text}) {
    const image_source = img.src;
    const image_description = img.alt;

    return(
        <main>
            <div className="entry-image">
                <img src={image_source} alt={image_description} />
            </div>
            <div className="entry-content">
                <img src="/marker.png" alt="location marker" className="location"/>
                <span className="country">{country}</span>
                <a href={googleMapsLink} className="map-link">View on Google Maps</a>
                <p className="place-name">{title}</p>
                <p className="date">{dates}</p>
                <p className="place-description">{text}</p>
            </div>        
        </main>
    )
}