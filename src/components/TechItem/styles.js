import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.5s;
  @media screen and (max-width: 991px) {
    width: 40%;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 769px) {
    width: 45%;
  }
  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
  }
  &:hover {
    box-shadow: 10px 10px 20px #A6ABBD;
    margin-top: -10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1100px) {
    height: 30vh;
  }
  @media screen and (max-width: 991px) {
    height: 28vh;
  }
  @media screen and (max-width: 769px) {
    height: 20vh;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  @media screen and (max-width: 769px) {
    height: 25vh;
  }
`;

export const TechName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: black;
  font-style: italic;
  margin-top: 20px;
  @media screen and (max-width: 550px) {
    font-weight: 500;
  }
`;

export const TechTitle = styled.div`
  width: 80%;
  height: fit-content;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 550px) {
    width: 95%;
  }
`;

export const Duration = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: auto;
  span {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    color: black;
    @media screen and (max-width: 550px) {
      font-weight: 500;
    }
  }
`;
