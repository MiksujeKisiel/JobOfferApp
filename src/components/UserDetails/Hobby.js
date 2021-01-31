import React from 'react'

export const Hobby = ({hobby}) => {
    const listItems = hobby.slice(0).map((text) => (
        <p>{text}</p>
       ));
    return (
        <div>
            {listItems}
        </div>
    )
}

