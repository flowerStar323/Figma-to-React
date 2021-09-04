import React, { Component } from 'react';
import "../../scss/bodyStyle.scss";
import MobileTags from './MobileTags';
import Bodyblock from './Bodyblock';
class index extends Component {
    constructor() {
        super();
        this.state = {
            isMenu: false
        }
    }
    showmenu = () => {
        this.setState({
            isMenu: !this.state.isMenu
        });
        !this.state.isMenu ? document.getElementById('mobiletaglist').setAttribute('style', "display:block  !important;") : document.getElementById('mobiletaglist').setAttribute('style', "display: none!important");
    }
    render() {
        return (
            <div style={{ position: "relative" }}>

                <div className="Body-Card">
                    <div className="Cards">
                        <div className="Brown-Card">
                            <div className="Brown-Header">EDGE DNA</div>
                            <div className="Brown-Small-Header">
                                <p>A</p><p>W</p><p>A</p><p>R</p><p>D</p><p>S</p>
                            </div>
                            <div className="Brown-Next-Header">CONGRATULATIONS TO</div>
                            <div className="Brown-Text">OUR SPARKS!</div>
                            <div className="Brown-Card-Content">
                                We are delighted to announce our next set of winners of our SPARK of the <br />
                                Month Awards, Corporate SPARK & SPARK Team of the Quarter Awards, as well
                                as Cluster SPARK & SPARK Team of the Quarter Awards - all of whom have gone
                                above and beyond in displaying one or more of the four behavioural
                                competencies outlined within our EDGE DNA Framework.<br />
                                So, join us in congratulating our worthy winners! And don’t forget to get in your
                                nominations for next month’s awards for those who are inspiring you to go
                                above and beyond.
                            </div>
                        </div>
                        <div className="Orange-Card">
                            <div className="Orange-Header">EDGE DNA</div>
                            <div className="Orange-Small-Header">
                                <p>C</p><p>O</p><p>M</p><p>P</p><p>E</p><p>T</p><p>E</p><p>N</p><p>C</p><p>I</p><p>E</p><p>S</p>
                            </div>
                            <div className="Orange-Next-Header">Learn more about the EDGE DNA
                            </div>
                            <div className="Orange-Text">Competencies</div>
                            <div className="Orange-Card-Content">
                                EDGE DNA Competencies is our behavioral and leadership competency
                                framework, in support of delivering our future vision as EDGE.
                                Learn more about the EDGE DNA Competencies
                            </div>
                            <div className="Orange-Card-Button">
                                LEARN MORE
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>

                    <ul className="Body-Tags" id="bodytags">
                        <li className="Body-Tags-List">ALL</li>
                        <li className="Body-Tags-List">SPARKS OF THE MONTH</li>
                        <li className="Body-Tags-List">SPARKS OF THE QUARTER</li>
                        <li className="Body-Tags-List">SPARKS TEAMS OF THE QUARTER</li>
                        <li className="Body-Tags-List">SPARKS OF THE YEAR</li>
                        <li className="Body-Tags-List">SPARK TEAMS OF THE YEAR</li>
                        <li className="Body-Tags-List">VIDEOS</li>
                    </ul>
                    <div className="Body-Tags-Hide" onClick={this.showmenu}><i className="fa fa-bars"></i></div>
                    <MobileTags />

                </div>
                <div className="Body-Buttons">
                    <div className="Body-Show">SHOW ARCHIVES</div>
                    <div className="Body-Filter">FILTER<i className="fa fa-filter" /></div>
                </div>
                <div className="Body-Btn-down-Text">
                    SPARKS OF THE MONTH - MARCH 2021
                </div>


                <Bodyblock />
                <div className="Body-True-Card">
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face5.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Sanjuanita Ordonez</div>
                                    <div className="Card-Name-Text">AL TARIQ</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">PRO-ACTIVE THINKER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face6.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Phyllis Godley</div>
                                    <div className="Card-Name-Text">HORIZON</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">CAN-DO MINDSET</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face7.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Marvin McKinney</div>
                                    <div className="Card-Name-Text">HORIZON</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">COLLABORATIVE LEADER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face8.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Jacob jones</div>
                                    <div className="Card-Name-Text">ADASI</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header">ACTION DRIVER</div>
                                    <div className="Card-bar-Text">WITH A SENSE OF UGENCY</div>
                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Body-True-Card">
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face9.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Marvin McKinney</div>
                                    <div className="Card-Name-Text">AMMROC</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">COLLABORATIVE LEADER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face10.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Robert Fox</div>
                                    <div className="Card-Name-Text">ETS</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">PRO-ACTIVE THINKER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face11.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Guy Hawkins</div>
                                    <div className="Card-Name-Text">ADBS</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header">ACTION DRIVER</div>
                                    <div className="Card-bar-Text">WITH A SENSE OF UGENCY</div>
                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face12.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">jerome Bell</div>
                                    <div className="Card-Name-Text">GAL</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header">CAN-DO MINDSET</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="Body-Btn-down-Text">
                    SPARKS OF THE QUARTER - Ql
                </div>

                <Bodyblock />
                <div className="Body-True-Card">
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face5.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Sanjuanita Ordonez</div>
                                    <div className="Card-Name-Text">AL TARIQ</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">PRO-ACTIVE THINKER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face6.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Phyllis Godley</div>
                                    <div className="Card-Name-Text">HORIZON</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">CAN-DO MINDSET</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Body-True-Card-subblk">
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face7.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Marvin McKinney</div>
                                    <div className="Card-Name-Text">HORIZON</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header-Text">COLLABORATIVE LEADER</div>

                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                        <div className="Card-Out">
                            <div className="Body-True-Card-Left">
                                <div className="Card-Left-Inside"></div>
                                <div className="Card-Left-Rectangle"></div>
                            </div>
                            <div className="True-Card-One">
                                <div className="Card-Face"><img src="face8.png" /></div>
                                <div className="Card-Name">
                                    <div className="Card-Name-Header">Jacob jones</div>
                                    <div className="Card-Name-Text">ADASI</div>
                                </div>
                                <div className="Card-bar">
                                    <div className="Card-bar-Header">ACTION DRIVER</div>
                                    <div className="Card-bar-Text">WITH A SENSE OF UGENCY</div>
                                </div>

                            </div>
                            <div className="Body-True-Card-Right">
                                <div className="Card-Right-Inside" />
                                <div className="Card-Right-Rectangle"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Body-Btn-down-Text">

                    SPARK TEAMS OF THE QUARTER - MARKETING 8
                </div>
                <Bodyblock />

                <div className="Next-Card-Bar">
                    <div className="Next-Card-Bar-Text">
                        Nominate & Appreciate Colleagues
                    </div>
                    <div className="Next-Card-Btn-Group">
                        <div className="Nominate-Btn">NOMINATE</div>
                        <div className="Appreciate-Btn">APPRECIATE</div>
                    </div>
                </div>
                <div className="Video-Text">VIDEOS</div>
                <div className="Video-Small-List">
                    <div className="Video-Small-SubList">
                        <div className="Video-One">
                            <div className="True-Video-One">
                                <div className="Video-img"><img src="video1.png" /></div>
                                <div className="Video-Name">
                                    <div className="Video-Name-Header">quis nostrud exercitation
                                        ullamco laboris nisi</div>
                                    <div className="Video-Name-Text">10/06/2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="Video-One">
                            <div className="True-Video-One">
                                <div className="Video-img"><img src="video2.png" /></div>
                                <div className="Video-Name">
                                    <div className="Video-Name-Header">quis nostrud exercitation
                                        ullamco laboris nisi</div>
                                    <div className="Video-Name-Text">10/06/2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Video-Small-SubList">
                        <div className="Video-One">
                            <div className="True-Video-One">
                                <div className="Video-img"><img src="video3.png" /></div>
                                <div className="Video-Name">
                                    <div className="Video-Name-Header">quis nostrud exercitation
                                        ullamco laboris nisi</div>
                                    <div className="Video-Name-Text">10/06/2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="Video-One">
                            <div className="True-Video-One">
                                <div className="Video-img"><img src="video4.png" /></div>
                                <div className="Video-Name">
                                    <div className="Video-Name-Header">quis nostrud exercitation
                                        ullamco laboris nisi</div>
                                    <div className="Video-Name-Text">10/06/2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default index;