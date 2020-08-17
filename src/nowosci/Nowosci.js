import React, { Component } from 'react'
import './Nowosci.scss';
import logo from '../img/iluzja-album.jpg'; 

class Nowosci extends Component {
    render() {
        return (
            <div>

                <header>
                    <div className="header-mask"></div>
                    <div className="header-search">
                        <span className="motto">Twoja encyklopedia muzyki</span>
                        <div className="search-bar-main">
                            <form method="get">
                                <input type="text" className="search" placeholder="Wyszukaj artystę, album..." />
                                <input type="submit" value="Szukaj" className="search-btn" />
                            </form>
                        </div>
                    </div>
                </header>
                 <div className="news-container">
                    <div className="news">
                        Nowości
                    </div>
                </div>

                <div className="container desc-info" id="desc-info">
                    <div className="row info-container" >
                        <div className="col-sm-12 col-md-6">
                            <iframe className="info-video" src="https://www.youtube.com/embed/s7Z75i_xYZg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        <div className="col-sm-12 col-md-6 info">
                            <h2>Szpaku #Hot16Challenge2</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="col-sm-12 news-community">
                            <span><i className="fas fa-user"></i>Szpaku</span>
                            <span><i className="fas fa-user-friends"></i>-</span>
                            <span><i className="fas fa-compact-disc"></i>-</span>
                            <span><i className="fas fa-users"></i>GUGU</span>
                            <span><i className="fab fa-youtube" style={{color: '#FF0000'}}></i>https://www.youtube.com/watch?v=s7Z75i_xYZg</span>
                        </div>
                    </div>
                </div>

                <div className="container album-info">
                    <div className="row info-container" >

                        <div className="col-sm-12 col-md-6 info">
                            <h2>Album: Iluzja</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-6 album-img-center">
                            <img className="album-img" src={logo} alt="okładka" />
                        </div>

                        <div className="col-sm-12 album-community">
                            <span><i className="fas fa-compact-disc"></i></span>
                            <span><i className="fas fa-users"></i></span>
                            <span><i className="fas fa-bus"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nowosci;
