import React from 'react';

import { 
  Container, 
  Row,  
  TextWrapper1, 
  TextWrapper2, 
  ImageWrapper1,
  ImageWrapper2
} from './styles';

import ImageOne from '../../assets/images/img-comp1.png';
import ImageTwo from '../../assets/images/img-comp2.png';

export const ArticleSection = () => {
  return (
    <Container>
      <Row>
        <TextWrapper1>
          <span>
            Sorem spsum dolor sit amsectetur 
            tempor incididunt ut laborea.
            Sorem spsum dolor sit amsectetur 
            adipisclit, seddo eiusmod 
            tempor incididunt ut laborea.  
          </span>
        </TextWrapper1>
        <ImageWrapper1>
          <img src={ImageOne} alt="illustration-one"/>
        </ImageWrapper1>
      </Row>
      <Row>
        <ImageWrapper2>
          <img src={ImageTwo} alt="illustration-two"/>     
        </ImageWrapper2>
        <TextWrapper2>
          <span>
            Sorem spsum dolor sit amsectetur 
            tempor incididunt ut laborea.
            Sorem spsum dolor sit amsectetur 
            adipisclit, seddo eiusmod 
            tempor incididunt ut laborea.  
          </span>
        </TextWrapper2>
      </Row>
    </Container>
  )
};

export default ArticleSection;