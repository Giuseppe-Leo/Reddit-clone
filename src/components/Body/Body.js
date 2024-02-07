import React, {useEffect, useState} from 'react';
import './Body.css';
import { fetchTopPosts } from '../../API/RedditAPI';

function Body() {
const [topPosts, setTopPosts] = useState([]);


useEffect(() =>{

async function fetchData() {
  try{ const data = await fetchTopPosts('worldnews');
setTopPosts(data.data.children);
}catch(error){



}
}


fetchData();
}, []);



  return (
    <div className="body">
      {topPosts.map(post => (
         
        <div key={post.data.id} className="post-card">
        <p className='author'>Posted by:{post.data.author}</p>
          <h2>{post.data.title}</h2>
          <p>{post.data.selftext}</p>
          {post.data.thumbnail && <img src={post.data.thumbnail} alt="Post" />}
        </div>
      ))}
    </div>
  );
}

export default Body;