import React, { useRef, useState } from 'react'
import './dashboard.css';
import { FaArrowRightLong, FaUsers } from "react-icons/fa6";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";


function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
  const annualRef = useRef(null);


  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);

    if (period === 'Annualy' && annualRef.current) {
      annualRef.current.scrollIntoView({ behavior: 'smooth' });
    }

   
   

  };
  return (
    <div className='page'>
      <div className='dashboard-top'>
        <h2  >Choose a plan that's just for you!</h2>
        <div className="dashboard-top-select-period">
          <p onClick={() => handlePeriodClick('Monthly')} className={selectedPeriod === 'Monthly' ? 'selected' : ''} >   Monthly </p>
          <p onClick={() => handlePeriodClick('Annualy')} className={selectedPeriod === 'Annualy' ? 'selected' : ''} >   Annualy </p>
        </div>
      </div>

      <div className="dashboard-grid-one">

        <div className="dashboard-box">
          <div className="dashboard-box-top">
            <span className='one'>Basic</span>
            <p class="price">$89.9/mo</p>
            <span className='two'>$9.99/mo</span>
            <div className='dashboard-box-top-button' style={{ backgroundColor: "#fbe7af" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
            <hr />
          </div>

          <div className="dashboard-box-bottom">
            <p>What you'll get</p>

            <ul>
              <li><FaUsers /> Upto 25 users</li>
              <li><TiCloudStorageOutline />Upto 25gb storage</li>
              <li><MdOutlineMailOutline /> Email support</li>
            </ul>

            <div className="dashboard-box-bottom-explore">
              <h4>EXPLORE FEATURES</h4>
            </div>
          </div>

        </div>


        <div className="dashboard-box">
          <div className="dashboard-box-top">
            <span className='one'>Standard</span>
            <p class="price">$189.99/mo</p>
            <span className='two'>$99.99/mo</span>
            <div className='dashboard-box-top-button' style={{ backgroundColor: "#fb8e90" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
            <hr />
          </div>

          <div className="dashboard-box-bottom">
            <p>What you'll get</p>

            <ul>
              <li><FaUsers /> Upto 50 users</li>
              <li><TiCloudStorageOutline />Upto 60gb storage</li>
              <li><MdOutlineMailOutline /> Email+Chat support</li>
            </ul>

            <div className="dashboard-box-bottom-explore">
              <h4>EXPLORE FEATURES</h4>
            </div>
          </div>


        </div>

        <div className="dashboard-box">
          <div className="dashboard-box-top">
            <span className='one'>Premium</span>
            <p class="price">$389.9/mo</p>
            <span className='two'>$199.99/mo</span>
            <div className='dashboard-box-top-button' style={{ backgroundColor: "#e9a0fd" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
            <hr />
          </div>

          <div className="dashboard-box-bottom">
            <p>What you'll get</p>

            <ul>
              <li><FaUsers /> Upto 75 users</li>
              <li><TiCloudStorageOutline />Upto 100gb storage</li>
              <li><MdOutlineMailOutline /> Email+Chat+Whatsapp support</li>
            </ul>

            <div className="dashboard-box-bottom-explore">
              <h4>EXPLORE FEATURES</h4>
            </div>
          </div>

        </div>

      </div>


      <div className="dashboard-grid-two">
        <div className="dashboard-grid-two-left">


          <div className="left-content">
            <div className="left-content-botton-one" style={{backgroundColor:"#d5ef9a"}}>
              <p>Free forever</p>
            </div>
            <h1>Free Stater</h1>
            <p>The quickest and easiest way to ty protocols with baisc functionality</p>

            <div className='button-two' style={{ backgroundColor: "#d5ef9a" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
          </div>


          <div className="right-content">
            <div className="right-content-ul">
              <p>What you'll get</p>

              <ul>
                <li><FaUsers /> Upto 25 users</li>
                <li><TiCloudStorageOutline />Upto 25gb storage</li>
                <li><MdOutlineMailOutline /> Email support</li>
              </ul>


            </div>
          </div>
        </div>



        <div className="dashboard-grid-two-right">
          <div className="left-content">
            <div className="left-content-botton-one" style={{backgroundColor:"#8cb5ff"}}>
              <p>Lets Connect</p>
            </div>
            <h1>Enterprise Plan</h1>
            <p>Effortlessly customize and fine-tune service as<br/> your needs shift, ensuring the perfect tools for success</p>

            <div className='button-two' style={{ backgroundColor: "#8cb5ff" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
          </div>
          


          <div className="right-content">
            <div className="right-content-ul">
              <p>What you'll get</p>

              <ul>
                <li><FaUsers /> Upto 25 users</li>
                <li><TiCloudStorageOutline />Upto 25gb storage</li>
                <li><MdOutlineMailOutline /> Email support</li>
              </ul>


            </div>
          </div>

        </div>
        
      </div>
      <div className='info'>Some unique features are only avalaible in add-ons with individual plans for each features</div>



      {/* annual  */}

      <h1 id='annual' ref={annualRef} style={{margin:"3%"}}>Annual Packages</h1>


      <div className="dashboard-grid-one">

        <div className="dashboard-box">
          <div className="dashboard-box-top">
            <span className='one'>1 Year</span>
            <p class="price">$1089.9/mo</p>
            <span className='two'>$399.99/mo</span>
            <div className='dashboard-box-top-button' style={{ backgroundColor: "#fbe7af" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
            <hr />
          </div>

          <div className="dashboard-box-bottom">
            <p>What you'll get</p>

            <ul>
              <li><FaUsers /> Upto 25 users</li>
              <li><TiCloudStorageOutline />Upto 25gb storage</li>
              <li><MdOutlineMailOutline /> Email support</li>
            </ul>

            <div className="dashboard-box-bottom-explore">
              <h4>EXPLORE FEATURES</h4>
            </div>
          </div>

        </div>




        <div className="dashboard-box">
          <div className="dashboard-box-top">
            <span className='one'>1 Year Standard</span>
            <p class="price">$1989.99/mo</p>
            <span className='two'>$999.99/mo</span>
            <div className='dashboard-box-top-button' style={{ backgroundColor: "#fb8e90" }}>
              <h5>Get Started</h5>
              <FaArrowRightLong />
            </div>
            <hr />
          </div>

          <div className="dashboard-box-bottom">
            <p>What you'll get</p>

            <ul>
              <li><FaUsers /> Upto 50 users</li>
              <li><TiCloudStorageOutline />Upto 60gb storage</li>
              <li><MdOutlineMailOutline /> Email+Chat+Whatsapp support</li>
            </ul>

            <div className="dashboard-box-bottom-explore">
              <h4>EXPLORE FEATURES</h4>
            </div>
          </div>


        </div>

        

      </div>

    </div>
  )
}

export default Dashboard