import React, { Component } from 'react';
import "../../scss/headerStyle.scss";
class index extends Component {
    constructor() {
        super();
        this.state = {
            isMenu: false,
        }
    }
    showmenu = () => {
        this.setState({
            isMenu: !this.state.isMenu
        });
        !this.state.isMenu ? document.getElementById('headerrightitem').setAttribute('style', "display: flex !important") : document.getElementById('headerrightitem').setAttribute('style', "display: none !important");
    }
    render() {
        return (
            <div className="Header-main" style={{ position: "relative" }}>
                <div className="Header-Left-Search">
                    <div className="Header-Left-Mark">
                        <div className="Header-Left-Mark-Title">EDGE HUB</div>
                    </div>
                    <div className="Header-Left-Search-Input">
                        <form className="form-main">
                            <span className="form-span"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control form-control-flush" name="search" placeholder="Search..." />
                        </form>
                    </div>
                </div>
                <div className="Header-Right-Menu-Hide" onClick={this.showmenu}><i className="fa fa-bars"></i></div>
                <div className="Header-Right-Item" id="headerrightitem">
                    <div className="Header-Page-Name">MY PAGE</div>
                    <div className="Header-Ring"><i className="fa fa-bell-o" /></div>
                    <div className="Header-Loginer"><img src="face7.png" /></div>
                    <div className="Header-Three-Icon"><i className="fa fa-bars" /></div>
                    <div className="Header-Right-Time">
                        <div className="Ring-Icon"><i className="fa fa-clock" /></div>
                        <div className="Header-Ring-Text">Abu Dhabi, UAE <br /> 03:00 PM</div>
                    </div>
                    <div className="Header-Right-Area">Oslo, Norway<br /> 01:00 PM</div>
                    <div className="Header-Right-Setting"><i className="fa fa-cog" /></div>
                </div>
            </div>
        );
    }
}

export default index;