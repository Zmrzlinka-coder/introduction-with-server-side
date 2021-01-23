import React from 'react'

function Header(props) {
    return (
        <div className='header__name'>
            {props.children}
        </div>
    )
}

export default Header
