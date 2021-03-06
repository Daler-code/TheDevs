import styled from 'styled-components';

export const Heading = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  color: black;
  text-align: center;
  span {
    font-size: 20px;
    font-weight: 500;
    color: #2669FF;
    font-style: italic;
    @media screen and (max-width: 550px) {
      font-size: 17px;
      line-height: 22px;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 17px;
    line-height: 22px;
    padding: 0;
  }
`;

export const ServiceCard = styled.div`
  width: 30%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2669FF;
  border-radius: 15px;
  cursor: pointer;
  transition: 1s;
  margin-bottom: 30px;
  &:hover {
    background-color: #7054FF;
  }
  @media screen and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 700px) {
    height: 38vh;
    width: 47%;
    border-radius: 12px;
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: white;
  img {
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    margin-top: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
  text-align: center;
  span {
    font-size: 15px;
    color: white;
    font-weight: 500;
    margin-top: 15px;
    @media screen and (max-width: 700px) {
      font-size: 11px;
      margin-top: 8px;
      line-height: 15px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 16px;
  }
`;