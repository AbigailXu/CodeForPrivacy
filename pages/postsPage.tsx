import React from 'react';
import { Link } from 'react-router-dom';
import {Post} from '@/types/types'


type PostPageData = {
    dataset: Post;
};

function PostPage( { dataset } : PostPageData) {
  const { _id, title, description } = dataset;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PostPageData;
