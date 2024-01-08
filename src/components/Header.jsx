import React from 'react'
import { FaAngleDown } from "react-icons/fa";

function Header() {
  return (
    <div className='header'>

      <div className='header-logo'>
        <img src="https://t3.ftcdn.net/jpg/04/37/56/48/360_F_437564804_9i2iMQl65goueDniemeb7ae6iiq1yFmy.jpg" width={80} height={80} alt="" />
      </div>


      <ul>
        <li>
          <div className='header-box'>
            <img src="https://t3.ftcdn.net/jpg/01/90/61/20/240_F_190612024_BKjOap5f9q8vf3g5M1G6QXcR73jhd2Fe.jpg" alt="Small Image" className="header-box-image" />
            <span className="header-box-text"><h6>ABC Solutons PVT.Ltd</h6></span>
          </div>
        </li>
        <li>
          <div className='header-box'>
            <FaAngleDown size={18} />

          </div>
        </li>
      </ul>


    </div>
  )
}

export default Header