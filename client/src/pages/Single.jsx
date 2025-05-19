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
          </div>
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
          <h1>lkfy osduiyf sydf lsduf</h1>
          <p>
            akuyd kasyt dita isdty aksudy iuas65dc76riw79 iw6teyoyq867er
            yqwnoe76ti
            qwiue76itufgqwvhjeiutiqfjwgvhjeiu7968qtwfgvejiu87q968wrytefhgvhjiqu8w7
            q 7qywleup9qowygehq8w7yetgqlwie0qygwenq7wygehqnw7egyqw8 iia7ty
            dawue706qtfwvhei nbw6 ftevhbawt6
          </p>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default Single;
