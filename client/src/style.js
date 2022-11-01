import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #faf7c3;
  min-height: 100vh;
  padding : 0;
  margin: 0;
`

export const Header = styled.div`
  font-size: 32px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 6px 0;
`;

export const ImageContainer = styled.img`
  height: 60px;
  border-radius: 20px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60vw 40vw;
`;
