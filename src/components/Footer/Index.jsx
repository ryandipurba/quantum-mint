import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-white sticky-bottom"
      // style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/groups/1220649054627343"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/quantumQTC"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Youtobe --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.youtube.com/channel/UC4tTzBhauqPY9BFfsWBsFDQ"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-youtube"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/quantumqtc/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* <!-- website --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.quantum-coin.co/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-safari"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-dark" href="https://www.quantum-coin.co/">
          &nbsp; Quantum world
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
