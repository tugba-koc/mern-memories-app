import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  border: 1px solid grey;
  background-color: white;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  margin-top: 20px;
  height: max-content;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 16px;
  outline: none;
  padding-left: 18px;
  color: black;
  width: 90%;
  margin-top: 4px;
  border-radius: 12px;
  border: 1px solid grey;
  height: 28px;
  :focus {
    border: 1px solid black;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  }
  :nth-last-child(2) {
    border: none;
    padding-left: 0;
    border-radius: 0;
  }
`;

export const Label = styled(Text)`
  font-size: 16px;
  text-align: start;
  margin: 14px 0 0 0;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const Button = styled.button`
  border: 1px solid black;
  cursor: pointer;
  padding: 12px 18px;
  margin-top: 12px;
  font-size: 18px;
  color: black;
  font-weight: 700;
  border-radius: 10px;
  display: block;
  width: 100%;
  color: white;
  background : green;
`;
