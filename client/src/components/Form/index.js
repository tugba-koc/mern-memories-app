import React, { useEffect, useState } from 'react';
import { Container, Text, Input, Label, FormContainer, Button } from './styles';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updateCurrentPost } from '../../actions/actionPost';
import { selectCurrentId, selectPosts } from '../../redux/post/postReducer';
import { ActionType } from '../../redux/post/action_types';

const initialState = {
  creator: '',
  title: '',
  message: '',
  tags: [],
  selectedFile: '',
};

export const Form = () => {
  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();

  let posts = useSelector(selectPosts);
  let currentId = useSelector(selectCurrentId);

  useEffect(() => {
    if (currentId) {
      let post = posts.find((el) => el._id === currentId);
      if (post) setPostData(post);
    }
  }, [currentId]);

  const changeHandler = (e) => {
    let val = '';
    if (e.target.name === 'tags') {
      val = e.target.value.split(',');
    } else {
      val = e.target.value;
    }
    setPostData({ ...postData, [e.target.name]: val });
  };

  const sendPost = async (e, postData) => {
    e.preventDefault();
    if (currentId) {
      let data = await updateCurrentPost(currentId, postData);
      console.log(data);
      dispatch({
        type: ActionType.SET_POST,
        payload: data,
      });
    } else {
      let data = await createPost(postData);
      dispatch({
        type: ActionType.SET_POST,
        payload: data,
      });
    }
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    });
  };

  const clearData = (e) => {
    e.preventDefault();
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    });
    dispatch({
      type: ActionType.SET_CURRENT_POST_ID,
      payload: null,
    });
  };

  return (
    <Container>
      <Text>Create a memory</Text>
      <FormContainer onSubmit={(e) => sendPost(e, postData)}>
        <Label htmlFor='creator'>Creator name</Label>
        <Input
          type='text'
          name='creator'
          value={postData.creator}
          onChange={(e) => changeHandler(e)}
        />

        <Label htmlFor='title'>Title name</Label>
        <Input
          type='text'
          name='title'
          value={postData.title}
          onChange={(e) => changeHandler(e)}
        />

        <Label htmlFor='message'>Message name</Label>
        <Input
          type='text'
          name='message'
          value={postData.message}
          onChange={(e) => changeHandler(e)}
        />

        <Label htmlFor='tags'>Tags name</Label>
        <Input
          type='text'
          name='tags'
          value={postData.tags}
          onChange={(e) => changeHandler(e)}
        />
        <Label htmlFor='selectedFile'>Select file</Label>
        <FileBase64
          type='file'
          multiple={false}
          onDone={(el) => {
            setPostData({ ...postData, selectedFile: el.base64 });
          }}
        />
        <Button type='submit'>Add</Button>
      </FormContainer>
      <Button onClick={(e) => clearData(e)}>Clear</Button>
    </Container>
  );
};
