import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Write() {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input placeholder="title"></input>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          ></ReactQuill>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
          ></input>
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button> Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art"></input>
            <label htmlFor="art">Art</label>/
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="phil" id="phil"></input>
            <label htmlFor="phil">Philosophy</label>{" "}
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="tech" id="tech"></input>
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="gen" id="gen"></input>
            <label htmlFor="gen">General</label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
