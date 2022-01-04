import React from "react";
import App from "../../App";
import "./style.css";
import Logo from "../../assets/image/logo.png";
import Gif from "../../assets/image/gif.gif";

export default function Mint() {
  return (
    <div className="container">
      <div class="row align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-12">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div class="col-md-6">
          <h1 className="tittle display-4 mb-3">
            Welcome To Quantum World Nft Version 2.0
          </h1>
          <h3 className="text-justify desc">
            Mint your version 2.0 quantum motorcycle NFT Art , get a 10%
            discount from all of quantum ev and our partners merchandise . free
            quantum motorcycle sharing subscription . (worth $80 sgd )when
            showing NFT Art at our sale counter . staking NFT coming soon .
          </h3>
          <h3 className="mt-4 price" style={{ textShadow: "1px 1px #0c0c0c" }}>
            Price 0.5 SOL
          </h3>
          <div className="mint-btn">
            <App />
          </div>
        </div>
        <div class="col-6">
          <img src={Gif} alt="" className="gif " />
        </div>
      </div>

      {/* <div className="row align-items-center p-3" style={{ height: "100vh" }}>
        <div className="col-md-12  align-tem-center">
          <img src={Logo} alt="" className="logo" />
          <div className="mint text-center">
            <div style={{ margin: "50px 0" }}>
              <h3>
                Mint your version 2.0 quantum motorcycle NFT Art , get a 10%
                discount from all of quantum ev and our partners merchandise .
                free quantum motorcycle sharing subscription . (worth $80 sgd
                )when showing NFT Art at our sale counter . staking NFT coming
                soon .
              </h3>
              <h3 className="mt-4">Price 0.5 SOL</h3>
              <App />
              <p className="mt-4">Please connect wallet to be able to mint</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
