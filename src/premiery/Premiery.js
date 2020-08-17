import React, { Component } from 'react';
import okladka from '../img/iluzja-album.jpg';
import OwlCarousel2 from 'react-owl-carousel2';
import '../../node_modules/react-owl-carousel2/lib/styles.css';
import '../../node_modules/react-owl-carousel2/src/owl.theme.default.css';

class Premiery extends Component {
    render() {

        const options = {
            items: 3,
            nav: true,
            rewind: true,
            autoplay: false,
            loop: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                }
            },
            dotsEach: true
        };

        return (
            <div>
                <div className="container premiery">
                    <div className="row">
                        <div className="col-sm-12 premiera-month">
                            <i className="far fa-calendar-alt"></i>05.2020
                        </div>
                    </div>

                    <OwlCarousel2 ref="car" options={options} >
                    <div className="album-slide">
                            <div className="premiera-album-img">
                                <img className="premiera-album-img" src={okladka} />
                            </div>
                            <div className="premiera-album-title">04.05.2020</div>
                            <div className="premiera-album-data">Czerwony dywan</div>
                        </div>
                        <div className="album-slide">
                            <div className="premiera-album-img">
                                <img className="premiera-album-img" src={okladka} />
                            </div>
                            <div className="premiera-album-title">04.05.2020</div>
                            <div className="premiera-album-data">Czerwony dywan</div>
                        </div>
                        <div className="album-slide">
                            <div className="premiera-album-img">
                                <img className="premiera-album-img" src={okladka} />
                            </div>
                            <div className="premiera-album-title">04.05.2020</div>
                            <div className="premiera-album-data">Czerwony dywan</div>
                        </div>
                        <div className="album-slide">
                            <div className="premiera-album-img">
                                <img className="premiera-album-img" src={okladka} />
                            </div>
                            <div className="premiera-album-title">04.05.2020</div>
                            <div className="premiera-album-data">Czerwony dywan</div>
                        </div>
                        <div className="album-slide">
                            <div className="premiera-album-img">
                                <img className="premiera-album-img" src={okladka} />
                            </div>
                            <div className="premiera-album-title">04.05.2020</div>
                            <div className="premiera-album-data">Czerwony dywan</div>
                        </div>
                    </OwlCarousel2>
                </div>
            </div>
        )
    }
}

export default Premiery;
