import icon from "../assets/icon.png";

function Entry({img, name, country, mapLink, dateRange, description}) {
  return (
    <div className="container">
      <img className="main-img" src={img} alt={name} />
      <div className="entry-content">
        <div className="location-group">
          <img src={icon} alt="icon" />
          <p className="country">{country}</p>
          <a className="map-link" href={mapLink} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="place-name">{name}</h1>
        <p className="date-range">{dateRange}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Entry;
