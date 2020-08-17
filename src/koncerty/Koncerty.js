import React, { Component } from 'react'
import './Koncerty.scss';
import okladka from '../img/iluzja-album.jpg';

class Koncerty extends Component {
    render() {
        return (
            <div>
                <div className="container koncerty">
                    <div className="row koncerty-choice">
                        <div className="col-sm-12">
                            <span className="k-active">Koncerty</span>
                            <span>Trasy koncertowe</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="text" className="k-search" />
                            <input type="button" value="Szukaj" className="k-search-btn"/>
                        </div>
                    </div>
                    <div className="row k-meat">
                        <div className="col-sm-3 k-border">
                        <span className="bold k-filters-title">Filtruj</span>
                            <ul className="k-filters">
                                <li><input type="checkbox" className="k-checkbox" />Wojewodztwo</li>
                                <li><input type="checkbox" className="k-checkbox" />Wojewodztwo</li>
                                <li><input type="checkbox" className="k-checkbox" />Wojewodztwo</li>
                                <li>
                                    <ul><input type="checkbox" className="k-checkbox" defaultChecked={true}/><span className="bold">Zachodniopomorskie</span>
                                        <li><input type="checkbox" className="k-checkbox" defaultChecked={true}/><span className="bold">Gryfino</span></li>
                                        <li><input type="checkbox" className="k-checkbox" />Police</li>
                                        <li><input type="checkbox" className="k-checkbox" />Szczecin</li>
                                    </ul>

                                </li>

                            </ul>
                        </div>
                        <div className="col-sm-9 k-koncerty">
                            <div className="k-koncert">
                                <img src={okladka} />
                                <div className="k-koncert-info">
                                    <div className="k-koncert-title">24.05.2020 Quebon / Tackonafideer - Gryfino - Stara Cegielnia</div>
                                    <div className="k-koncert-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</div>
                                </div>
                            </div>

                            <div className="k-koncert">
                                <img src={okladka} />
                                <div className="k-koncert-info">
                                    <div className="k-koncert-title">24.05.2020 Quebon / Tackonafideer - Gryfino - Stara Cegielnia</div>
                                    <div className="k-koncert-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</div>
                                </div>
                            </div>

                            <div className="k-koncert">
                                <img src={okladka} />
                                <div className="k-koncert-info">
                                    <div className="k-koncert-title">24.05.2020 Quebon / Tackonafideer - Gryfino - Stara Cegielnia</div>
                                    <div className="k-koncert-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Koncerty;
