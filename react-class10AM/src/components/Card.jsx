import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className = {props.class} id=''>
                <img src="" alt="" className="img" />
                <div className="info">
                    <h1>this is title {props.title}</h1>
                    <p>{props.name} ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia eligendi facilis doloremque, voluptatum quia sapiente exercitationem quos iste tempora voluptate totam sit autem facere! Illum cum enim magnam. Officia.</p>
                </div>
            </div>

        </>
    )
}

export default Card;

Card.defaultProps = {
    name: "Dinesh",
    title: 5,
    class: "cardContainer",
}
