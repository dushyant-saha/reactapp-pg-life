import '../stylesheets/Home.css';
import { Link } from 'react-router-dom'
import delhi from "../img/delhi.png";
import mumbai from "../img/mumbai.png";
import bangalore from "../img/bangalore.png";
import chennai from "../img/chennai.png";
import hyderabad from "../img/hyderabad.png";

export function Home() {
    return (
        <section className='home'>
            <div className="banner-container">
                <div className="banner-form">
                    <h2 className='pb-3'>Happiness per Square Foot</h2>
                    <form>
                        <div className="input-group city-search">
                            <input type="text" className="form-control input-city" id="city" name="city" placeholder="Enter your city to search for PGs" />
                            <div className="input-group-append">
                                <button type="submit" className="search-button btn btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='link-container'>
                <h1>Major Cities</h1>
                <div className='city-list'>
                    <div className='city-card-container'>
                        <Link className="" to='/room-search-delhi'><div className='city-card rounded-circle delhi'><img src={delhi} alt='Delhi' /></div></Link>
                    </div>
                    <div className='city-card-container'>
                        <Link className="" to='/room-search-mumbai'><div className='city-card rounded-circle mumbai'><img src={mumbai} alt='Mumbai' /></div></Link>
                    </div>
                    <div className='city-card-container'>
                        <Link className="" to='/room-search-bangalore'><div className='city-card rounded-circle bangalore'><img src={bangalore} alt='Bangalore' /></div></Link>
                    </div>
                    <div className='city-card-container'>
                        <Link className="" to='/room-search-chennai'><div className='city-card rounded-circle chennai'><img src={chennai} alt='Chennai' /></div></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}