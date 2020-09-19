import React, {useState} from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    display: inline-block;
    margin:8px;
    padding: 0px;
    width: 210px;
    height: 310px;
    border-radius: 5px;
    box-shadow: 8px 10px 15px 2px rgba(0,0,0,0.253);   
    
    
    @media only screen and (max-width: 425px) {
        width: 47%;
        margin: 5px;
    }
    @media only screen and (max-width: 320px) {
        width: 95%;
        margin: 8px;
    }
`;
const ImageContainer = styled.div`
    height:60%;
`;

const CardBody = styled.div`
    display: block;
    height: 20%;
`;
const CardTitle = styled.span`
    display: block;
    padding: 5px 5px 0px 15px;
    font-size: 13px;
    font-weight: 500;
`;
const CardText = styled.p`
    margin: 0px;
    padding: 4px 5px 0px 15px; 
    font-size: 11px;
    color: grey;
`;

const CardFooter = styled.div`
    height:20%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const Info = styled.span`
    padding: 0px 5px 0px 15px; 
    color: green;
    font-size: 18px;
`;
const AddToCart = styled.button`
    margin: 1px 5px;
    padding: 8px;
    border: 0px;
    background: tomato;
    
`;
const ProductCard = (props) => {
    return(
        <CardWrapper>
            <ImageContainer>
                <img src={props.image} style={{height:'100%' ,width:'100%'}}></img>
            </ImageContainer>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.text}</CardText>
            </CardBody>
            <CardFooter>
                <Info>{props.info}</Info>
                <AddToCart>Add To Cart</AddToCart>
            </CardFooter>
        </CardWrapper>
    );
    
}
export default ProductCard;