import React, { useState } from 'react';
import { Container, Text, Input, Label, FormContainer, Button } from './styles';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/actionPost';

const initialState = {
  creator: '',
  title: '',
  message: '',
  tags: [],
  // likeCount: '',
  selectedFile: '',
};

export const Form = () => {
  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let val = '';
    if (e.target.name === 'tags') {
      val = e.target.value.split(',');
    } else {
      val = e.target.value;
    }
    setPostData({ ...postData, [e.target.name]: val });
  };

  const sendPost = (e, postData, dispatch) => {
    e.preventDefault();
    createPost(postData, dispatch);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      // likeCount: '',
      selectedFile: '',
    });
  };

  const clearData = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      // likeCount: '',
      selectedFile: '',
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

        {/* <Label htmlFor='likeCount'>Like count</Label>
        <Input
          type='number'
          name='likeCount'
          value={postData.likeCount}
          onChange={(e) => changeHandler(e)}
        /> */}

        <Label htmlFor='selectedFile'>Select file</Label>
        <FileBase64
          type='file'
          multiple={false}
          onDone={(el) => {
            console.log(el.base64);
            setPostData({ ...postData, selectedFile: el.base64 });
          }}
        />
        <Button type='submit'>Add</Button>
        <Button onClick={() => clearData()} type='submit'>
          Clear
        </Button>
      </FormContainer>
    </Container>
  );
};
