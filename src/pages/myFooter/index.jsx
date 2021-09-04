import React, { Component } from 'react';
import "../../scss/footerStyle.scss";
class index extends Component {
    render() {
        return (
            <div>
                All Rights Reserved @ {new Date().getFullYear()}.EDGE GROUP
            </div>
        );
    }
}

export default index;