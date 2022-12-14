import React from 'react';
import moment from 'moment';

import {
  Image,
  Text,
  Tag,
  Content,
  Time,
  Title,
  SVG,
  Icons,
  Overlay,
  Edit,
} from './styles';

import { Card } from './styles';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../../redux/post/action_types';
import { deleteCurrentPost, likeCurrentPost } from '../../../actions/actionPost';

export const Post = ({ post }) => {
  const dispatch = useDispatch();
  const showStatusPost = (id) => {
    dispatch({
      type: ActionType.SET_CURRENT_POST_ID,
      payload: id,
    });
  };

  const deletePost = (id) => {
    deleteCurrentPost(id);
    dispatch({
      type: ActionType.DELETE_POST,
      payload: id,
    });
  };

  const likePost = (id) => {
    likeCurrentPost(id);
    dispatch({
      type: ActionType.SET_LIKE,
      payload: id,
    });
  };
  return (
    <>
      {post ? (
        <Card>
          <Content>
            <Image
            id={post?._id}
              src={
                post?.selectedFile
                  ? post?.selectedFile
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
              }
            />
            <Overlay></Overlay>
            <Edit onClick={() => showStatusPost(post?._id)}>
              <svg
                className='feather feather-edit-2'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
              >
                <path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z' />
              </svg>
            </Edit>
            <Text>{post?.creator}</Text>
            <Time>{moment(post?.createdAt).fromNow()}</Time>
          </Content>
          {post?.tags
            ? post.tags.map((tag,index) => (
                <Tag key={index}>
                  <div>#{tag}</div>
                </Tag>
              ))
            : null}
          <Title>{post?.title}</Title>
          <Icons>
            <div onClick={()=>likePost(post?._id)}>
              <SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <title>like-1</title>
                <path
                  className='a'
                  d='M20,15.659h0a1.5,1.5,0,1,1,0,3H19a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,1-1.5,1H12.5c-2.851,0-3.5-.5-7-1v-8.5c2.45,0,6.5-4.5,6.5-8.5,0-1.581,2.189-2.17,3,.719.5,1.781-1,5.281-1,5.281h8a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,2-1.5,2H21a1.5,1.5,0,0,1,0,3H20'
                />
                <rect className='a' x='0.5' y='10.159' width='5' height='12' />
                <path d='M3.25,19.159a.75.75,0,1,0,.75.75.75.75,0,0,0-.75-.75Z' />
              </SVG>
              &nbsp; LIKE &nbsp; {post?.likeCount}
            </div>
            <div onClick={()=>deletePost(post?._id)}>
              <SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 58.67'>
                <title>Asset 25</title>
                <g id='Layer_2' data-name='Layer 2'>
                  <g id='Layer_1-2' data-name='Layer 1'>
                    <path
                      className='cls-1'
                      d='M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z'
                    />
                    <path
                      className='cls-1'
                      d='M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z'
                    />
                    <path
                      className='cls-1'
                      d='M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z'
                    />
                  </g>
                </g>
              </SVG>
              &nbsp; Delete
            </div>
          </Icons>
        </Card>
      ) : null}
    </>
  );
};
