//import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu.jsx";

function Single() {
  return (
    <>
      <div className="single">
        <div className="content">
          <img src="https://external-content.duckduckgo.com/iu/?u=https://tse3.mm.bing.net/th?id%3DOIP.U_VJuupQohwnzXcKMztqWgHaEo%26pid%3DApi&f=1&ipt=b3044f9604f0f67dff0b300df3bfa6bfbab445486f06ba01d59fa3710a04fa41&ipo=images"></img>
          <div className="user">
            <img src="https://external-content.duckduckgo.com/iu/?u=https://tse3.mm.bing.net/th?id%3DOIP.U_VJuupQohwnzXcKMztqWgHaEo%26pid%3DApi&f=1&ipt=b3044f9604f0f67dff0b300df3bfa6bfbab445486f06ba01d59fa3710a04fa41&ipo=images"></img>
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <div className="icons">E</div>
              </Link>
              <div className="icons">D</div>
            </div>
          </div>
          <h1>What in the test title?!</h1>
          <p>
            o not repeat yourself (DRY), it is better to create a .flexContainer
            class in CSS, because here we have lots of elements with display:
            flex, justify-content: center and align-items: center. Also, the
            effect for the post image doesnt have to be made with pseudoelement,
            it is easier to do this with just box-shadow. 24 Reply 5 replies
            @amaurimdsantos 2 years ago Thank you for your videos. Im following
            your tutorials and I have started looking for a job because Im
            confident now. Wish me luck. 1 Reply @LuisVargas616 2 years ago oh
            man I cant believe this is good and wrong in so many ways! Lama Dev
            doesnt answer any comment or question. The main folder has been
            updated or replaced with something new. If you follow alongside you
            will face frustration when connecting the client to the api. 2 Reply
            @iUniverse 2 years ago If you dont mind, can you make a fullstack
            tutorial that includes react, redux, and saga? Nonetheless, thank
            you very much for this great tutorial. 16 Reply @innabulatova4853 1
            year ago Thank you for this wonderful tutorial. It is a great start!
            Ive been doing either front-end or back-end projects, but now I see
            how it all works together. I had a bit of trouble with the database
            (because I have never learned about it), but pushed through anyways.
          </p>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default Single;
