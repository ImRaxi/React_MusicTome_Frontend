import React, { Component } from 'react'
import './Artysci.scss';
import okladka from '../img/iluzja-album.jpg'; 

class Artysci extends Component {
    render() {
        return (
            <div>
                <div className="container a-artysta">
                    <div className="row">
                        <div className="col-sm-3 a-artysta-img"><img src={okladka} /></div>
                        <div className="col-sm-9">
                            <div className="a-title">Paluch</div>
                            <div className="a-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 a-additional-info">
                            <div className="a-additional-title">
                                Albumy
                            </div>
                            <div className="a-albumy-each">
                                <div className="a-album"><div className="album-disc"><i style={{color: 'rgb(0, 168, 118)'}} className="fas fa-compact-disc"></i></div><img src={okladka} /></div>
                                <div className="a-album"><div className="album-disc"><i style={{color: 'rgb(226, 192, 0)'}} className="fas fa-compact-disc"></i></div><img src={okladka} /></div>
                                <div className="a-album"><div className="album-disc"><i style={{color: 'rgb(212, 212, 211)'}} className="fas fa-compact-disc"></i></div><img src={okladka} /></div>
                            </div>
                            <div className="a-additional-title">
                                Wywiady
                            </div>

                            <div className="wywiady">
                                <p><a href="https://www.youtube.com/watch?v=4RaeeLm5Ako">Paluch ostro o politykach w #hot16challenge2, propsy dla Podsiadło i Domagały | Yurkosky x Paluch</a></p>
                                <p><a href="https://www.youtube.com/watch?v=4RaeeLm5Ako">Paluch ostro o politykach w #hot16challenge2, propsy dla Podsiadło i Domagały | Yurkosky x Paluch</a></p>
                                <p><a href="https://www.youtube.com/watch?v=4RaeeLm5Ako">Paluch ostro o politykach w #hot16challenge2, propsy dla Podsiadło i Domagały | Yurkosky x Paluch</a></p>
                                <p><a href="https://www.youtube.com/watch?v=4RaeeLm5Ako">Paluch ostro o politykach w #hot16challenge2, propsy dla Podsiadło i Domagały | Yurkosky x Paluch</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artysci;
