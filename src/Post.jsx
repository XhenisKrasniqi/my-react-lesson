import React, { useState } from 'react';

function Post({ author, text }) {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h1>{author}</h1>
      <p>{text}</p>

      <button
        onClick={() => setLike(!like)}
        style={{
          backgroundColor: like ? 'red' : 'blue'
        }}
      >
        {like ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default Post;