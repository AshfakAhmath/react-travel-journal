import img from "../assets/japanimg.jpg";
import icon from "../assets/icon.png";

function Entry() {
  return (
    <div className="container">
      <img className="main-img" src={img} alt="Mount Fuji" />
      <div className="entry-content">
        <div className="location-group">
          <img src={icon} alt="icon" />
          <p className="country">JAPAN</p>
          <a
            className="map-link"
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="place-name">Mount Fuji</h1>
        <p className="date-range">12 Jan, 2023 - 24 Jan, 2023</p>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Entry;
