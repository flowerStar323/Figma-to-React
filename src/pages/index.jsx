import React, { Component } from 'react';
import Header from './myHeader';
import MyBody from './myBody';
import MyFooter from './myFooter';

import "../scss/main.scss";

class index extends Component {
    render() {
        return (
            <div>
                <div className="Test-Header"><Header /></div>
                <div className="Test-Body"><MyBody /></div>
                <div className="Test-Footer"><MyFooter /></div>
            </div>
        );
    }
}

export default index;