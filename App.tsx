import * as React from 'react';
import './style.css';

export default function App() {
  const [posts, setPosts] = React.useState([]);
  const titles = posts.map((post) => post.title);
  // console.log('App1');

  React.useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      setPosts(await res.json());
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
