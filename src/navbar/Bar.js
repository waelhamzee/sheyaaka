import React from 'react'

export default function Bar() {
  return (
    <div className='bar-container'>
        <div>
            <img src={require("../images/Path 27.png")} alt='home'/>
            <p>Home</p>
        </div>
        <div>
            <img src={require("../images/Group 2 (1).png")} alt='home'/>
            <p>Category</p>
        </div>
        <div>
            <img src={require("../images/Path 3557.png")} alt='home'/>
            <p>chat</p>
        </div>
        <div>
            <img src={require("../images/Icon feather-shopping-cart.png")} alt='home'/>
            <p>Cart</p>
        </div>
        <div>
            <img src={require("../images/Icon open-person.png")} alt='home'/>
            <p>Profile</p>
        </div>
    </div>
  )
}
