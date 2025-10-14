import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/style.css';
import main from "./img/bd.svg"
import logo from "./img/logo.png"
import a1 from "./img/a1.jpeg";
import a2 from "./img/a2.jpg"
import a3 from "./img/a3.jpg"
import a4 from "./img/a4.jpeg"
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      {/* Spinner Start */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}

      {/* Navbar Start */}
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <a href="index.html" className="navbar-brand">
              <img className="img-fluid" src={logo} alt="" style={{ width: '40%', height: '40%' }} />
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
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
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Hero Start */}
      <div className="container-fluid pt-5 hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Bangladesh E-Voting<br />বাংলাদেশ ই-ভোটিং</h1>
              <p className="text-white mb-4 animated slideInRight">Empowering Democracy, One Vote at a Time - Shaping Our Future Together</p>
              <Link to="/home" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Vote</Link>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={main} alt="Digital map of Bangladesh" style={{ width: '50%', height: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <>
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
  {/* About End */}
  <section className="u-black u-clearfix u-section-4" id="sec-1dc7">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h1 className="text-center mt-4 mb-4 u-text-default u-title u-text-1">
        Features
      </h1>
      <div style={{marginLeft:'5%'}} className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-xl u-layout-wrap u-layout-wrap-1 justify-content-center">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            {/* Row 1 */}
            <div className="row justify-content-center">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-text u-text-2">Transparent voting</h3>
                    <p className="u-text u-text-grey-40 u-text-3">
                      Our Voting system is a blockchain based system and it
                      provides a transparent voting system, eliminating the
                      problem of vote tampering
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-text u-text-4">KYC</h3>
                    <p className="u-text u-text-grey-40 u-text-5">
                      We have introduced the decentralized KYC of the voters so
                      no double voting can be done through the system and
                      eliminated the fake vote count
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-text u-text-6">Developed Country</h3>
                    <p className="u-text u-text-grey-40 u-text-7">
                      Our voting system will result in a loyal election and a
                      true leader will be elected that will put the country on
                      the way of development&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-text u-text-1">Blockchain</h3>
                    <p className="u-text u-text-grey-40 u-text-2">
                      Our Voting system is a blockchain based system and it
                      provides a transparent voting system, eliminatede the
                      problem of vote tempering
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-align-center u-text u-text-8">Future</h3>
                    <p className="u-text u-text-grey-40 u-text-9">
                      Learn how to take beautiful portraits with minimal
                      equipment; how light affects your images and &nbsp;how to
                      make the very best of any location.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h3 className="u-text u-text-3">Decentralized</h3>
                    <p className="u-text u-text-grey-40 u-text-4">
                      Our voting application is completely decentralized and
                      this results in the elimination of the interference of any
                      person in voting results
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* Row 2 (if needed) */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQs Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
          Popular FAQs
        </div>
        <h1 className="mb-4">Frequently Asked Questions</h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ1">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is a blockchain-based e-voting system?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  A blockchain-based e-voting system is a decentralized
                  application (DApp) that uses blockchain technology to ensure
                  the security, integrity, transparency, and privacy of the
                  voting process
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How does a blockchain-based e-voting system work?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  After authenticating each participant's identity, the system
                  provides them with a digital wallet. A wallet holds the user's
                  credentials and a single coin that represents one vote. When a
                  user votes for a candidate, the coin in his or her wallet is
                  moved to that candidate's account or wallet
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.3s">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What are the benefits of a blockchain-based e-voting system?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  A blockchain-based e-voting system can provide full
                  transparency over the votes, with real-time tracking. It also
                  ensures the anonymity of the voters and can help in providing
                  a fair result
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  What are some examples of blockchain-based e-voting systems?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionFAQ1"
              >
                <div className="accordion-body">
                  Followmyvote' and 'Polys' are examples of blockchain-based
                  electronic voting systems that allow for greater election
                  transparency
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion" id="accordionFAQ2">
            <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What challenges might a blockchain-based e-voting system face?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Challenges can include ensuring widespread acceptance of such
                  systems, enhancing their resistance to potential mistakes, and
                  dealing with the high computational costs of blockchain
                  transactions
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can a blockchain-based e-voting system prevent multiple votes
                  from the same user?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Yes, once a vote has been verified and turned into a block
                  added to the blockchain, the transaction history of the user
                  is updated to prevent the same user from casting multiple
                  votes
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.7s">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Is a blockchain-based e-voting system secure?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Yes, blockchain technology has the potential to improve the
                  overall security of electronic voting systems. It eliminates
                  centralized control and intermediaries from the process,
                  making it more secure
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeIn" data-wow-delay="0.8s">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Can a blockchain-based e-voting system be used for nationwide
                  elections?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionFAQ2"
              >
                <div className="accordion-body">
                  Yes, a blockchain-based e-voting system can potentially be
                  used for nationwide elections. It can improve security and
                  decrease the cost of hosting a nationwide election
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQs Start */}
  {/* Team Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
          Team
        </div>
        <h1 className="mb-4">Election Commission of bangladesh</h1>
      </div>
      <div className="row g-5 align-items-center">
        <div className="col-lg-12">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="team-item bg-white text-center rounded p-4 pt-0">
                    <img
                      className="img-fluid rounded-circle p-4"
                      style={{ width: "50%", height: "50%" }}
                      src={a1}
                      alt=""
                    />
                    <h5 className="mb-0">Kazi Habibul Awal</h5>
                    <small>Chief Election Commissioner</small>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="team-item bg-white text-center rounded p-4 pt-0">
                    <img
                      className="img-fluid rounded-circle p-4"
                      style={{ width: "50%", height: "50%" }}
                      src={a3}
                      alt=""
                    />
                    <h5 className="mb-0">Mrs. Rashida Sultana</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-md-4">
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="team-item bg-white text-center rounded p-4 pt-0">
                    <img
                      className="img-fluid rounded-circle p-4"
                      style={{ width: "50%", height: "50%" }}
                      src={a2}
                      alt=""
                    />
                    <h5 className="mb-0">
                      Brig Gen Md Ahsan Habib Khan (Retd)
                    </h5>
                    <small>Election Commissioner</small>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <div className="team-item bg-white text-center rounded p-4 pt-0">
                    <img
                      className="img-fluid rounded-circle p-4"
                      style={{ width: "50%", height: "50%" }}
                      src={a4}
                      alt=""
                    />
                    <h5 className="mb-0">Mr. Md. Alamgir</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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
  {/* Footer End */}
  {/* Back to Top */}
 
</>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a>

      {/* JavaScript Libraries */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      {/* Template Javascript */}
      <script src="js/main.js"></script>
    </>
  );
}

export default Landing;
