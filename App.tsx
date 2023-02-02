import * as React from 'react';
import './style.css';

export default function App() {
  const [posts, setPosts] = React.useState([]);
  const titles = posts.map((post) => post.title);
  // console.log('App1');

  React.useEffect(() => {
    const getPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(setPosts);
    };
    // console.log('useEffect');

    getPosts();
  }, []);
  //console.log('App2');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{titles}</div>
    </div>
  );
}
