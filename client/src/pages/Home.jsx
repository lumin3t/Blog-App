//import React from "react";
import { Link } from "react-router-dom";
function Home() {
  const posts = [
    {
      id: 1,
      title: "Test title",
      desc: 'To generate Lorem Ipsum text in Visual Studio Code, you can use the "Lorem Ipsum" extension. Open the command palette with Ctrl+Shift+P, type "lorem ipsum," and select the option to insert a line or paragraph of text.',
      img: "https://blog.lipsumhub.com/wp-content/uploads/2024/09/how-to-generate-lorem-ipsum-in-vscode-lipsumhub-768x402.jpg",
    },
    {
      id: 2,
      title: "Test title",
      desc: 'To generate Lorem Ipsum text in Visual Studio Code, you can use the "Lorem Ipsum" extension. Open the command palette with Ctrl+Shift+P, type "lorem ipsum," and select the option to insert a line or paragraph of text.',
      img: "https://blog.lipsumhub.com/wp-content/uploads/2024/09/how-to-generate-lorem-ipsum-in-vscode-lipsumhub-768x402.jpg",
    },
    {
      id: 3,
      title: "Test title",
      desc: 'To generate Lorem Ipsum text in Visual Studio Code, you can use the "Lorem Ipsum" extension. Open the command palette with Ctrl+Shift+P, type "lorem ipsum," and select the option to insert a line or paragraph of text.',
      img: "https://blog.lipsumhub.com/wp-content/uploads/2024/09/how-to-generate-lorem-ipsum-in-vscode-lipsumhub-768x402.jpg",
    },
    {
      id: 4,
      title: "Test title",
      desc: 'To generate Lorem Ipsum text in Visual Studio Code, you can use the "Lorem Ipsum" extension. Open the command palette with Ctrl+Shift+P, type "lorem ipsum," and select the option to insert a line or paragraph of text.',
      img: "https://blog.lipsumhub.com/wp-content/uploads/2024/09/how-to-generate-lorem-ipsum-in-vscode-lipsumhub-768x402.jpg",
    },
    {
      id: 5,
      title: "Test title",
      desc: 'To generate Lorem Ipsum text in Visual Studio Code, you can use the "Lorem Ipsum" extension. Open the command palette with Ctrl+Shift+P, type "lorem ipsum," and select the option to insert a line or paragraph of text.',
      img: "https://blog.lipsumhub.com/wp-content/uploads/2024/09/how-to-generate-lorem-ipsum-in-vscode-lipsumhub-768x402.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="post" />
            </div>
            <div className="content">
              <Link to={`post/${post.id}`}>
                <h1 className="link">{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
