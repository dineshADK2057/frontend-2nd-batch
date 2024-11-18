import React from 'react'
// import './Card.css'
import styled from 'styled-components'

const Card = (props) => {
    return (
        <>

            <CardContainer extra = {props.extra}>
                <img src="" alt="" className="img" />
                <Info >
                    <h1>this is title {props.title}</h1>
                    <p>{props.name} ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia eligendi facilis doloremque, voluptatum quia sapiente exercitationem quos iste tempora voluptate totam sit autem facere! Illum cum enim magnam. Officia.</p>
                </Info>
            </CardContainer>

            
        </>
    )
}

export default Card;

// Card.defaultProps = {
//     name: "Dinesh",
//     title: 5,
//     class: "cardContainer",
// }

export const CardContainer = styled.div`
    display: flex;
    padding: 20px;
    border: 1px solid gainsboro;
    border-radius: 16px;
    background-color: ${props => props.extra=="extraCard" ? "red" : "white"};
`

const Info = styled.div`
    width: 70%;
`


