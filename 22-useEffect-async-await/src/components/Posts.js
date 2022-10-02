import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts1, setPosts] = useState([]);
  const [error, setError] = useState(''); //put error in the Component state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts1 = await res.json();
        setPosts(posts1);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  //immediately invoked function expression example
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const posts1 = await res.json();
  //       setPosts(posts1);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   })();
  // }, []);

  if (error) {
    return <h1>Error{error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1> // ternarny - show this block if data loading
      ) : (
        posts1.map((posts1) => <Post key={posts1.id} {...posts1} />) //new array of posts
      )}
    </>
  );
}
export default Posts;
