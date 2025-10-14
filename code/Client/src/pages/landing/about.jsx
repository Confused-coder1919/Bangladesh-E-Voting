import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/style.css';
import main from "./img/bd.svg"
import logo from "./img/logo.png"
import mujid from "./img/mujib.png"
import a1 from "./img/a1.jpeg";
import a2 from "./img/a2.jpg"
import a3 from "./img/a3.jpg"
import a4 from "./img/a4.jpeg"

function About() {
  return (
    <>
    <>
  <div className="container-fluid sticky-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
      <a href="index.html" className="navbar-brand">
          <img
            className="img-fluid"
            src={logo}
            alt=""
            style={{ width: "40%", height: "40%" }}
          />
        </a>
        <button
          type="button"
          className="navbar-toggler ms-auto me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
      <Link to="/" className="nav-item nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-item nav-link">
        About
      </Link>
    </div>
          {/* <butaton type="button" class="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
                  data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Hero Start */}
  <div className="container-fluid pt-5 bg-primary hero-header">
    <div className="container pt-5">
      <div className="row g-5 pt-5">
        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1 className="display-4 text-white mb-4 animated slideInRight">
            About Us <br/>
            Bangladesh E-Voting
          </h1>
        
        </div>
        <div className="col-lg-6 align-self-end text-center text-lg-end">
          <img
            className="img-fluid"
            src={main}
            alt=""
            style={{ maxHeight: 500 }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(20, 24, 62, 0.7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn btn-square bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-light p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-light px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src={mujid} style={{maxHeight:500}}/>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            About Us
          </div>
          <h1 className="mb-4">About Bangladesh Voting</h1>
          <p className="mb-4">
            For the about us section make it like this and in the first
            paragraph just write this text "Bangladesh has a rich history of
            elections that have shaped its political landscape. The country
            elects its national legislature, the unicameral Jatiyo Sangshad,
            through national elections held every five years¹. The Jatiyo
            Sangshad consists of 350 members, 300 of whom are directly elected
            in single-seat constituencies, while the remaining 50 seats are
            reserved for women and filled based on proportional representation
          </p>
          <p className="mb-4">
            The country's first general election was held on December 7, 1970,
            when it was still part of Pakistan⁴. The Awami League, led by
            Bangabandhu Sheikh Mujibur Rahman, won by a landslide, setting the
            stage for the country's independence
          </p>
          <p className="mb-4">
            Since independence, Bangladesh has held 11 parliamentary elections¹.
            The country initially had a parliamentary system, but executive
            powers were transferred to the Presidency in 1975¹. This system was
            maintained until 1991 when the Twelfth Amendment was passed,
            returning the state to a parliamentary system
          </p>
          <p className="mb-4">
            Presidential elections have also been a part of Bangladesh's
            electoral history. From independence until constitutional reform in
            1991, the President was elected by popular vote, although this only
            happened on three occasions - 1978, 1981, and 1986². Following
            constitutional reform and a return to a parliamentary democracy in
            1991, the office of the President has been largely a ceremonial one
          </p>
          <p className="mb-4">
            The country's electoral history has been characterized by an
            unofficial two-party system, with the Bangladesh Awami League and
            the Bangladesh Nationalist Party being the dominant political
            parties¹. However, other parties like the Jatiya Party (Ershad) have
            also gained electoral success over the years
          </p>
          <p className="mb-4">
            Despite the progress made, the electoral process in Bangladesh has
            faced challenges, including concerns about transparency, potential
            for manipulation, and barriers to voting for some citizens¹. These
            issues highlight the ongoing need for electoral reforms to ensure a
            fair and democratic process.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white-50 footer ">
    <div className="container wow fadeIn" data-wow-delay="0.1s">
      <div className="copyright">
        <div className="row">
          <div className="col-md-12 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              Bangladesh Election Commission
            </a>
            , All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}
export default About;