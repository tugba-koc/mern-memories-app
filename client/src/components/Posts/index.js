import React from 'react';
import { Post } from '../../components';
import { selectPosts } from '../../redux/post/postReducer';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export const Posts = () => {
  const posts = useSelector(selectPosts);

  console.log(posts);

  return (
    <Container>
      {posts?.length > 0 &&
        posts?.map((post, index) => <Post post={post} key={index} />)}
      <Post />
    </Container>
  );
};
