import React, { useEffect, useState } from 'react'
import './Signup.css'
import $ from "jquery";
import { useDispatch } from 'react-redux'
import { RegisterUser, loginUser } from '../../js/action/users'
import { useHistory } from 'react-router-dom';



const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    $(function () {
      $(".btn").click(function () {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
      });
    });

    $(function () {
      $(".btn-signup").click(function () {
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("form-signup-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
      });
    });

    $(function () {
      $(".btn-signin").click(function () {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
      });
    });
  }, [])
  return (<div className="signup-class ">
    <div className="container">
      <div className="frame">
        <div className="nav">
          <ul className="links">
            <li className="signin-active">
              <a className="btn">Sign in</a>
            </li>
            <li className="signup-inactive">
              <a className="btn">Sign up </a>
            </li>
          </ul>
        </div>
        <div ng-app ng-init="checked = true">
          <form className="form-signin" action method="post" name="form">

            <label htmlFor="username">Email</label>
            <input
              className="form-styling"
              type="text"
              name="username"
              placeholder
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              <span className="ui" />
              Keep me signed in
            </label>
            <div className="btn-animate">

              <a className="btn-signin" onClick={() => dispatch(loginUser({ email, password }, history))}>Sign in</a>
            </div>
          </form>
          <form className="form-signup" action method="post" name="form">

            <label htmlFor="fullname">name</label>
            <input
              className="form-styling"
              type="text"
              name="name"
              placeholder
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="fullname">lastname</label>
            <input
              className="form-styling"
              type="text"
              name="lastname"
              placeholder
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input className="form-styling" type="text" name="email" placeholder onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              placeholder
              onChange={(e) => setPassword(e.target.value)}
            />
            <a ng-click="checked = !checked" className="btn-signup" onClick={() => dispatch(RegisterUser({ name, lastname, email, password }, history))}>
              Sign Up
            </a>
          </form>

        </div>


      </div>

    </div>
  </div>
  )
}

export default Signup
