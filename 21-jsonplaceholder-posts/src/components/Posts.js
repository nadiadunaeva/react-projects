import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts1, setPosts] = useState([]);
  const [error, setError] = useState(''); //put error in the Component state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json()) //callback return json response from server
      .then((posts) => {
        //got posts array from the link
        setPosts(posts); //put posts in a State, then change posts state, then change Posts state
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   } //if isLoading =true(communicaion with swerver running)

  if (error) {
    return <h1>Error{error}:</h1>; //this block will show if an error occured
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
