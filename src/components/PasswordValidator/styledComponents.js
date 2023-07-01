// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const PasswordContainer = styled.div`
  width: 60%;
  height: 35vh;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px #434451;
  border-radius: 10px;
`
export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`
export const Paragraph = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 400;
  line-height: 0.6;
`
export const Input = styled.input`
  width: 60%;
  height: 40px;
  border-style: none;
  background-color: white;
`
export const Error = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
`
