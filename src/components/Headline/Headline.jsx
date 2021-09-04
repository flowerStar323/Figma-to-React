import React from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap';

import Video from '../../assets/category/video.png';
import Started from '../../assets/category/started.png';

const Headline = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="category-boxs">
                    <h5>All Categories</h5>
                    <p>Here you can see all categories that you have created. You can try to create a new one also!</p>
                </div>
                <div className="category-button">
                    <div className="row">
                        <div className="main-category-box-input">
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                className="col-md-4 search-category"
                                />
                            </InputGroup>
                        </div>
                        <div className="main-category-box-button">
                            <Button variant="primary">New Categories </Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="watch_video">
                        <div className="video-icons">
                            <img src={Video}  alt="logo"/>
                        </div>
                        <div className="video-name">
                            <p>Watch a Video</p>
                        </div>
                    </div>
                    <div className="get_started">
                        <div className="video-icons">
                            <img src={Started}  alt="logo"/>
                        </div>
                        <div className="video-name">
                            <p>Watch a Video</p>
                        </div>
                    </div>
                </div>
                <div className="border-full"></div>
            </div>
        </React.Fragment>
    )
}

export default Headline
