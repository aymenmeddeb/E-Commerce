import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Upload from './Upload';
import ListCommand from '../commande/ListCommand';
import { logoutUser } from '../../js/action/users'
import $ from "jquery";
import './dashboard.css'
import ListUser from './ListUser';



const Dashboard = ({ match }) => {
    useEffect(() => {

        const mobileScreen = window.matchMedia("(max-width: 990px )");
        $(document).ready(function () {
            $(".dashboard-nav-dropdown-toggle").click(function () {
                $(this).closest(".dashboard-nav-dropdown")
                    .toggleClass("show")
                    .find(".dashboard-nav-dropdown")
                    .removeClass("show");
                $(this).parent()
                    .siblings()
                    .removeClass("show");
            });
            $(".menu-toggle").click(function () {
                if (mobileScreen.matches) {
                    $(".dashboard-nav").toggleClass("mobile-show");
                } else {
                    $(".dashboard").toggleClass("dashboard-compact");
                }
            });
        });
    }, [])
    const dispatch = useDispatch()
    const history = useHistory()
    return (

        <div >

            <div className='dashboard'>
                <div className="dashboard-nav">
                    <header><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a><a href="#"
                        className="brand-logo"><i
                            className="fas fa-anchor"></i> <span>Dashboard</span></a></header>
                    <nav className="dashboard-nav-list"><a href="/dashboard/commande" className="dashboard-nav-item"><i className="fas fa-home"></i>
                        Commande </a><a
                            href="/dashboard/upload" className="dashboard-nav-item"><i className="fas fa-file-upload"></i> Upload </a>
                        <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                            className="fas fa-photo-video"></i> Media </a>
                            <div className='dashboard-nav-dropdown-menu'><a href="#"
                                className="dashboard-nav-dropdown-item">All</a><a
                                    href="#" className="dashboard-nav-dropdown-item">Recent</a><a
                                        href="#" className="dashboard-nav-dropdown-item">Images</a><a
                                            href="#" className="dashboard-nav-dropdown-item">Video</a></div>
                        </div>
                        <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                            className="fas fa-users"></i> Users </a>
                            <div className='dashboard-nav-dropdown-menu'><a href="/dashboard/listusers"
                                className="dashboard-nav-dropdown-item">All</a><a
                                    href="" className="dashboard-nav-dropdown-item">Subscribed</a><a
                                        href="#"
                                        className="dashboard-nav-dropdown-item">Non-subscribed</a><a
                                            href="#" className="dashboard-nav-dropdown-item">Banned</a><a
                                                href="#" className="dashboard-nav-dropdown-item">New</a></div>
                        </div>
                        <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                            className="fas fa-money-check-alt"></i> Payments </a>
                            <div className='dashboard-nav-dropdown-menu'><a href="#"
                                className="dashboard-nav-dropdown-item">All</a><a
                                    href="#" className="dashboard-nav-dropdown-item">Recent</a><a
                                        href="#" className="dashboard-nav-dropdown-item"> Projections</a>
                            </div>
                        </div>
                        <a href="#" className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </a><a
                            href="/profile" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </a>
                        <div className="nav-item-divider"></div>
                        <a onClick={() => { dispatch(logoutUser()); history.push("/"); }} href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
                    </nav>
                </div>
                <div className='match'>
                    <Route
                        path={`${match.url}/upload`}
                        component={Upload} />
                    <Route
                        path={`${match.url}/commande`}
                        component={ListCommand} />
                    <Route
                        path={`${match.url}/listusers`}
                        component={ListUser} />
                </div>
            </div>
            <br />    </div>
    )
}

export default Dashboard
