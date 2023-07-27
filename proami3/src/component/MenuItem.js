import React from 'react'

function MenuItem ({image,name,prix}){
    return (
        <div className='menuItem'>
            <div style={{backgroundImage: `url(${ image})` }}></div>
            <h1>{name}</h1>
            <p>${prix}</p>

        </div>
    );
}
 

export default MenuItem