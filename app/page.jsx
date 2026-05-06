import ParkingMap from './ParkingMap';

const parkingZones = [
  {
    id: 1,
    name: 'A Zone - Rustaveli',
    type: 'City Hall Zone',
    status: 'Estimated',
    free: 14,
    total: 50,
    price: '₾1/hr',
    eta: '8 min',
    ev: 3,
    disabled: 2,
    address: 'Rustaveli Avenue, Tbilisi',
    level: 'good'
  },
  {
    id: 2,
    name: 'East Point Mall Parking',
    type: 'Private Parking',
    status: 'Partner data placeholder',
    free: 72,
    total: 220,
    price: 'Free',
    eta: '15 min',
    ev: 12,
    disabled: 6,
    address: 'East Point, Tbilisi',
    level: 'good'
  },
  {
    id: 3,
    name: 'B Zone - Saburtalo',
    type: 'City Hall Zone',
    status: 'Estimated',
    free: 4,
    total: 65,
    price: '₾2/hr',
    eta: '5 min',
    ev: 1,
    disabled: 2,
    address: 'Saburtalo, Tbilisi',
    level: 'low'
  }
];

const tickets = [
  'Parking without registration',
  'Illegal parking',
  'Speeding',
  'Bus lane violation',
  'Red light violation',
  'Disabled parking misuse'
];

export default function HomePage() {
  return (
    <main className="page">
      <nav className="navbar">
        <div>
          <div className="logo">ParkSmart</div>
          <div className="tagline">Park smarter, not harder.</div>
        </div>

        <div className="navLinks">
          <a href="#map">Map</a>
          <a href="#parking">Parking</a>
          <a href="#favorites">Favorites</a>
          <a href="#tickets">Tickets</a>
        </div>

        <a className="loginButton" href="#parking">Open App</a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="badge">Smart parking platform for Tbilisi</div>

          <h1>Find parking before everyone else.</h1>

          <p>
            ParkSmart shows estimated free parking in Tbilisi City Hall zones
            and private parking lots such as malls, restaurants, hotels and
            offices. Compare prices, check EV and disabled spaces, save
            favourites and start navigation instantly.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#map">View Map</a>
            <a className="secondaryButton" href="#parking">See Parking</a>
          </div>
        </div>

        <section id="map" className="mapCard" aria-label="Real Tbilisi parking map">
          <ParkingMap />
        </section>
      </section>

      <section className="warning">
        <strong>Important:</strong> Availability in City Hall zones is estimated
        and may not be fully accurate because not every driver registers their
        parking.
      </section>

      <section id="parking" className="section">
        <div className="sectionHeader">
          <div>
            <h2>Parking zones</h2>
            <p>Public city zones and private parking locations in one view.</p>
          </div>
        </div>

        <div className="cards">
          {parkingZones.map((zone) => (
            <article className="card" key={zone.id}>
              <div className="cardTop">
                <div>
                  <span className={`statusDot ${zone.level}`}></span>
                  <span className="type">{zone.type}</span>
                  <h3>{zone.name}</h3>
                  <p className="small">{zone.status}</p>
                </div>

                <button className="favorite">☆</button>
              </div>

              <div className="stats">
                <div>
                  <span>Free</span>
                  <strong>{zone.free}</strong>
                </div>
                <div>
                  <span>Total</span>
                  <strong>{zone.total}</strong>
                </div>
                <div>
                  <span>Price</span>
                  <strong>{zone.price}</strong>
                </div>
                <div>
                  <span>ETA</span>
                  <strong>{zone.eta}</strong>
                </div>
              </div>

              <div className="details">
                <p>EV spaces: {zone.ev}</p>
                <p>Disabled spaces: {zone.disabled}</p>
                <p>{zone.address}</p>
              </div>

              <a
                className="cardButton"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(zone.address)}`}
                target="_blank"
              >
                Navigate
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="favorites" className="favorites section">
        <div>
          <h2>Save favourite places</h2>
          <p>
            Users can save home, work, malls, restaurants and regular parking
            areas for faster navigation and availability checks.
          </p>
        </div>

        <div className="favoriteChips">
          <span>Home</span>
          <span>Work</span>
          <span>East Point</span>
          <span>City Mall</span>
          <span>University</span>
        </div>
      </section>

      <section id="tickets" className="section">
        <div className="sectionHeader">
          <div>
            <h2>Car tickets & fines</h2>
            <p>One section for parking and driving-related violations.</p>
          </div>
        </div>

        <div className="ticketGrid">
          {tickets.map((ticket) => (
            <div className="ticket" key={ticket}>
              <div className="ticketIcon">⚠️</div>
              <h3>{ticket}</h3>
              <p>Fine information, rules and appeal guidance can be added here.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>ParkSmart</strong>
          <p>Smart parking for Tbilisi.</p>
        </div>

        <p>Website + web app prototype ready for Vercel deployment.</p>
      </footer>
    </main>
  );
}
