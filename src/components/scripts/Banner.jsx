import '../styles/Banner.css';
import hero from '../../assets/hero-car.svg';

const banner = () => {
  return (
    // <!-- banner -->
    <header id="hero">
      <div className="container hero-inner">
        {/* <!-- leading text --> */}
        <div className="heading animated fadeIn">
          <h1>Start driving your credit.</h1>
          <p className="lead py-1">
            No Appointments, no obligation and free to apply. Are you looking
            for a new car?
          </p>
          <a href="/" className="btn-apply-light">Get a car now</a>
        </div>

        {/* <!-- banner image --> */}
        <div className="car animated fadeIn">
          <img src={hero} alt="car" />
        </div>
      </div>
    </header>
  )
}

export default banner;