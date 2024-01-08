import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { GoPlus } from "react-icons/go";

function Right() {
  return (
    <div className='right'>
      <div className='rigth-top'>
        <IoIosNotifications size={25} color="#0096FF" />
      </div>
      <div className='rigth-middle'>

      </div>
      <div className='rigth-bottom'>
        <GoPlus size={25} color="#0096FF" />
      </div>
    </div>
  )
}

export default Right