import React from 'react';
import { Form, Posts } from './components';

// hooks
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// style
import { MainContainer, ImageContainer, Header, Container } from './style';
import { ActionType } from './redux/post/action_types';
import { getPosts } from './actions/actionPost';

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await getPosts();
    if (data) {
      dispatch({
        type: ActionType.SET_POST,
        payload: data,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <Header>
        Memories
        <ImageContainer src='https://cdn.vox-cdn.com/thumbor/qvJ_PVw2Ppnemy8hxFU2U3RojK0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23165626/memory2final.jpg'></ImageContainer>
      </Header>
      <Container>
        <Posts />
        <Form />
      </Container>
    </MainContainer>
  );
}

export default App;
