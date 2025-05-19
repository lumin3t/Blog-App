//import React from "react";

function Menu() {
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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
}
export default Menu;
