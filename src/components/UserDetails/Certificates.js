import React from 'react'

export const Certificates = ({certificates}) => {
    const listItems = certificates.slice(0).map((text) => (
       <p>{text}</p>
      ));
    return (
        <div>
            {listItems}
        </div>
    )
}


