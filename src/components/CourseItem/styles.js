import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    width: 40%;
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
  height: 35vh;
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
    height: 25vh;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
`;

export const CourseTitle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
  color: black;
  font-style: italic;
  margin-top: 20px;
  span {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    margin-left: 10px;
  }
  @media screen and (max-width: 550px) {
    font-weight: 500;
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
  font-weight: 400;
  font-style: normal;
  margin-left: 10px;
  margin-top: 20px;
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

export const InfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AuthorContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: 1.8px solid #2669FF;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 0.5s;
  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    border: 1.8px solid #08D0BD;
  }
`;

export const AuthorName = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
    margin-right: -10px;
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 25px;
    height: auto;
    margin-left: 20px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      filter: grayscale(100%);
    }
  }
`;

export const IconComponent = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
    height: auto;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      filter: grayscale(100%);
    }
  }
  span {
    font-size: 15px;
    color: grey;
    margin-left: 15px;
  }
`;

