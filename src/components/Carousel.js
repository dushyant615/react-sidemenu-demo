import React, {useState} from 'react';
import styled from 'styled-components';
import image from '../pic1.jpg';

const SlideContainer = styled.div`
    position: relative;
    margin: 0px;
    height: 40vh;
    border: 1px solid;
`;

const FadingSlides = styled.div`
    display: inline-block;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    
    @-webkit-keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
    }
    
    @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
    }
`;
const Carousel = () =>{
    return(
        <SlideContainer>
            <FadingSlides>
                <img src={image}/>
            </FadingSlides>

            <FadingSlides>
                <img src="" />
            </FadingSlides>

            <FadingSlides>
                <img src="" />
            </FadingSlides>
        </SlideContainer>
    );
};

export default Carousel;