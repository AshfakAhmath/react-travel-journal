import Entry from "./Components/Entry";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Entry
        img="https://scrimba.com/links/travel-journal-japan-image-url"
        name="Mount Fuji"
        country="JAPAN"
        mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        dateRange="12 Jan, 2023 - 24 Jan, 2023"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists."
      />
      <Entry
        img="https://scrimba.com/links/travel-journal-australia-image-url"
        name="Sydney Opera House"
        country="AUSTRALIA"
        mapLink="https://maps.app.goo.gl/oThYt6GhNpUQJ76U9"
        dateRange="27 May, 2023 - 8 Jun, 2023"
        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
      <Entry
        img="https://scrimba.com/links/travel-journal-norway-image-url"
        name="Geirangerfjord"
        country="NORWAY"
        mapLink="https://share.google/n2kqjVZsjqH4JgHsy"
        dateRange="01 Oct, 2024 - 18 Nov, 2024"
        description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </>
  );
}

export default App;
