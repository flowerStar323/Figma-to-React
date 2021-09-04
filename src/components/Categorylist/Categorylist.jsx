import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import First from '../../assets/category/first.png';
import Second from '../../assets/category/second.png';
import Third from '../../assets/category/third.png';
import Global from '../../assets/category/fi_globe.png';
import Copy from '../../assets/category/copy.png';
import Delete from '../../assets/category/delete.png';
import threedot from '../../assets/category/threedot.png';



class Categorylist extends Component {
    constructor() {
        super();
        this.state = {
            maincheck: true,
            dessertcheck: true,
            drinkscheck: false
        }
    }
    onChange = e => {
        let { dessertcheck, maincheck, drinkscheck } = this.state;
        if (e === "desserts") this.setState({ dessertcheck: !dessertcheck })
        else if (e === "main") this.setState({ maincheck: !maincheck })
        else if (e === "drinks") this.setState({ drinkscheck: !drinkscheck })
    }
    render() {
        return (
            <React.Fragment>
                <div className="menu_name">
                    <p>Type a menu name</p>
                </div>
                <div className="menu_discription">
                    <p>Type a menu description</p>
                </div>
                <div className="row p-2">
                    <div className="col-xs-6 col-sm-6 col-lg-3 list-category">
                        <div className="category-box">
                            {this.state.maincheck && <Dropdown className="dopboxer">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    <img src={threedot} alt="logo" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-2">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Global} alt="logo" style={{ width: "20px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Localize
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Copy} alt="logo" style={{ width: "17px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Duplicate
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4"><div style={{ display: "flex" }}>
                                        <div
                                            style={{

                                                width: "50px", display: "flex",
                                                justifyContent: "flex-end"
                                            }}>
                                            <img src={Delete} alt="logo" style={{ width: "17px" }} />
                                        </div>
                                        <div
                                            style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                            Delete
                                        </div>
                                    </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                            <div className="category-image">
                                <img src={First} alt="category" />
                                {this.state.maincheck && <div className="category-hovers">
                                    <div className="categtoper">
                                        <a href="#" className="enterbtn">Enter</a>
                                        <a href="#" className="editbtn">Edit</a>
                                    </div>
                                </div>}
                            </div>
                            <div className="category-content">
                                <div className="d-flex mt-2">
                                    <p className="category_name col-9">Main Courses</p>
                                    <label class="switch col-3">
                                        <input type="checkbox" checked={this.state.maincheck} onChange={(e) => this.onChange("main")} />
                                        <span class="slider round"></span>
                                    </label>

                                </div>
                                <p className="category_item col-12">10 items</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-3 list-category">
                        <div className="category-box">
                            {this.state.dessertcheck && <Dropdown className="dopboxer">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    <img src={threedot} alt="logo" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-2">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Global} alt="logo" style={{ width: "20px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Localize
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Copy} alt="logo" style={{ width: "17px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Duplicate
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4"><div style={{ display: "flex" }}>
                                        <div
                                            style={{

                                                width: "50px", display: "flex",
                                                justifyContent: "flex-end"
                                            }}>
                                            <img src={Delete} alt="logo" style={{ width: "17px" }} />
                                        </div>
                                        <div
                                            style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                            Delete
                                        </div>
                                    </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                            <div className="category-image">
                                <img src={Second} alt="category" />
                                {this.state.dessertcheck && <div className="category-hovers">
                                    <div className="categtoper">
                                        <a href="#" className="enterbtn">Enter</a>
                                        <a href="#" className="editbtn">Edit</a>
                                    </div>
                                </div>}
                            </div>
                            <div className="category-content">
                                <div className="d-flex mt-2">
                                    <p className="category_name col-9">Desserts</p>
                                    <label class="switch col-3">
                                        <input type="checkbox" checked={this.state.dessertcheck} onChange={(e) => this.onChange("desserts")} />
                                        <span class="slider round"></span>
                                    </label>

                                </div>
                                <p className="category_item col-12">0 items</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-lg-3 list-category">
                        <div className="category-box">
                            {this.state.drinkscheck && <Dropdown className="dopboxer">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    <img src={threedot} alt="logo" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-2">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Global} alt="logo" style={{ width: "20px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Localize
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <div style={{ display: "flex" }}>
                                            <div
                                                style={{

                                                    width: "50px", display: "flex",
                                                    justifyContent: "flex-end"
                                                }}>
                                                <img src={Copy} alt="logo" style={{ width: "17px" }} />
                                            </div>
                                            <div
                                                style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                                Duplicate
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4"><div style={{ display: "flex" }}>
                                        <div
                                            style={{

                                                width: "50px", display: "flex",
                                                justifyContent: "flex-end"
                                            }}>
                                            <img src={Delete} alt="logo" style={{ width: "17px" }} />
                                        </div>
                                        <div
                                            style={{ marginLeft: "10px", width: "70px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
                                            Delete
                                        </div>
                                    </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                            <div className="category-image">
                                <img src={Third} alt="category" />
                                {this.state.drinkscheck && <div className="category-hovers">
                                    <div className="categtoper">
                                        <a href="#" className="enterbtn">Enter</a>
                                        <a href="#" className="editbtn">Edit</a>
                                    </div>
                                </div>}
                            </div>
                            <div className="category-content">
                                <div className="d-flex mt-2">
                                    <p className="category_name col-9">Drinks</p>
                                    <label class="switch col-3">
                                        <input type="checkbox" checked={this.state.drinkscheck} onChange={(e) => this.onChange("drinks")} />
                                        <span class="slider round"></span>
                                    </label>

                                </div>
                                <p className="category_item col-12">20 items</p>
                            </div>

                        </div>
                    </div>



                </div>
            </React.Fragment>
        )
    }
}



export default Categorylist
