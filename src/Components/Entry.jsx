import icon from "../assets/icon.png";

function Entry(props) {
  return (
    <div className="container">
      <img className="main-img" src={props.img} alt={props.name} />
      <div className="entry-content">
        <div className="location-group">
          <img src={icon} alt="icon" />
          <p className="country">{props.country}</p>
          <a className="map-link" href={props.mapLink} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="place-name">{props.name}</h1>
        <p className="date-range">{props.dateRange}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Entry;
