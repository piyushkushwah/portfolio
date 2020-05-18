import React from 'react';

function Heading(props) {
    const { name } = props;
    return (
        <div className="head_wrap_01">
            <div className="underline"></div>
            <div className="underline top_margin"></div>
            <h1 className="heading">{name}</h1>
            <div className="underline"></div>
            <div className="underline top_margin"></div>
        </div>
    )
}

export default Heading;