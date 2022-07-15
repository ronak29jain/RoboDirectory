import React from "react";


const Card = ({ id, name, phone, email }) => {
    // const { id, name, phone, email } = props;
    return (
        <div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
            <img alt='robot_image' src= {`https://robohash.org/${email}?200*200`} />
            <div>
                <h2>{name}</h2>
                <h3>{phone}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card