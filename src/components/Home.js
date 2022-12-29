import React from "react";
import { Link } from "react-router-dom";
import readerImg from "../../src/readerImg.gif";
const Home = () => {
  return (
    <div>
      <div className="homeContent">
        <div className="descArea">
          <span>For Sale!</span>
          <h1>One good book is equal to <br /> hundred good friends</h1>
          <p>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div className="btnsArea">
            <Link to='/books'>Visit Store</Link>
            <Link to='/about'>Learn More</Link>
          </div>
        </div>
        <div className="imageArea">
          <img src={readerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
