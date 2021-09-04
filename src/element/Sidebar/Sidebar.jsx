import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'

import Logo from '../../assets/logo.png';
import Menu from '../../assets/icons/menu.png';
import Theme from '../../assets/icons/theme.png';
import feedback from '../../assets/icons/feedback.png';
import Modifier from '../../assets/icons/modifier.png';
import Banner from '../../assets/icons/banner.png';
import Code from '../../assets/icons/qr_code.png';
import View_menu from '../../assets/icons/view.png';
import Publish from '../../assets/icons/publish.png';
import Setting from '../../assets/icons/setting.png';
import Avatar from '../../assets/Avatar.png';
import Vertical from '../../assets/more-vertical.png';
import Support from '../../assets/category/support.png';
import Logout from '../../assets/category/Logout.png';

const Sidebar = () => {

  return (

    <div class="s-layout">

      <div class="s-layout__sidebar">
        <div className="mobilenaver">
          <a aria-current="page" class="cloud-menu active" href="/">
            <img src="/static/media/logo.633f8064.png" class="cloud-logo" alt="logo" />
            <h4 class="text-center bg-gray create-mobile-set2">Cloud Menu</h4>
          </a>

        </div>

        <a class="s-sidebar__trigger" href="#0">
          <i class="fa fa-bars"></i>
        </a>

        <nav class="s-sidebar__nav">
          <ul>
            <NavLink to="/" className="cloud-menu">
              <img src={Logo} className="cloud-logo" alt="logo" />
              <h4 className="text-center bg-gray create-mobile-set2">Cloud Menu</h4>
            </NavLink>
            <div className="heading-title">
              <em>MAIN MENU</em>
            </div>
            <li>
              <NavLink to="/category" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Menu} className="cloud-logo-link" alt="logo" />
                  <em style={{ color: "black" }}>Menu</em>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Theme} className="cloud-logo-link" alt="logo" />
                  <em>Theme </em>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={feedback} className="cloud-logo-link" alt="logo" style={{ width: "22px", height: "25px" }} />
                  <em>Feedback</em>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Modifier} className="cloud-logo-link" alt="logo" />
                  <em>Modifier</em>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Banner} className="cloud-logo-link" alt="logo" />
                  <em>Banner</em>
                </a>
              </NavLink>
            </li>
            <div className="heading-title-general">
              <em>GENERAL</em>
            </div>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Code} className="cloud-logo-link" alt="logo" />
                  <em>QR-code </em>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={View_menu} className="cloud-logo-link" alt="logo" />
                  <em>View menu</em>
                </a>
              </NavLink>
            </li>
            <li>
              <a class="s-sidebar__nav-link" href="#0">
                <img src={Publish} className="cloud-logo-link" alt="logo" />
                <em>Publish </em>
              </a>
            </li>
            <li>
              <NavLink to="#" activeClassName="active">
                <a class="s-sidebar__nav-link" href="#0">
                  <img src={Setting} className="cloud-logo-link" alt="logo" />
                  <em>Settings</em>
                </a>
              </NavLink>
            </li>
            <div className="user-active">
              <li className="user-profile">
                <a class="d-flex s-sidebar__nav-link-user" href="#0">
                  <div className="col-10">
                    <img src={Avatar} className="cloud-logo-link-user" alt="logo" />
                    <div className="user-name"> <em>Pizza Hot </em></div>
                    <div className="user-email">
                      <em>Pizzahot@gmail.com</em>
                    </div>
                  </div>
                  <div className="col-2 mb-2 cunrighter">
                    {['up'].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="secondary"
                      >

                        <Dropdown.Item className="customerhe">
                          <div className="row d-flex abnoner">
                            <div className="col-3">
                              <img src={Avatar} className="cloud-logo-link-user" alt="logo" />
                            </div>
                            <div className="col-9">
                              <div className="user-name"> <em>Pizza Hot </em></div>
                              <div className="user-email">
                                <em>Pizzahot@gmail.com</em>
                              </div>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1"><img src={Support} alt="Support" />Support</Dropdown.Item>
                        <Dropdown.Item eventKey="2"><img src={Logout} alt="Logout" />Logout</Dropdown.Item>
                      </DropdownButton>
                    ))}
                  </div>
                  {/* <Dropdown className="cunrighter">
                              <Dropdown.Toggle >
                                <img src={Vertical} className="user-clone" alt="logo"/>
                              </Dropdown.Toggle>
                              <Dropdown.Menu variant="light">
                                  <Dropdown.Item className="">
                                    <div>
                                    <img src={Avatar} className="cloud-logo-link-user" alt="logo"/>
                                    <div className="user-name"> <em>Pizza Hot </em></div>
                                    <div className="user-email">
                                      <em>Pizzahot@gmail.com</em>
                                    </div>
                                    </div>
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Localize</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">Duplicate</Dropdown.Item>
                                  <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown> */}



                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
