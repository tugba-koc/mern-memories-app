import styled from 'styled-components';

export const Card = styled.div`
  flex-basis: 40%;
  width: 100%;
  padding: 10px;
  margin: 8px;
  border: 1px solid grey;
  border-radius: 20px;
  height: 340px;
  background : white;
`;

export const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  position: absolute;
  top: 0px;
  color: white;
  left: 10px;
`;

export const Time = styled(Text)`
  top: 24px;
  left: 10px;
`;

export const Tag = styled.span`
  font-size: 16px;
  color: grey;
  margin: 0px 5px;
`;

export const Content = styled.div`
  position: relative;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  width: 100%;
`;

export const SVG = styled.svg`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;
