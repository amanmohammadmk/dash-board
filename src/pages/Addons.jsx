import React, { useState } from 'react'
import './adddon.css';


function Addons() {
  const addonPlans = [
    { id: 'addon-plan-1', name: 'One Day', features: ['1 User', '5GB Storage','Email Support'], price: '$0.99' },
    { id: 'addon-plan-2', name: 'Weekly', features: ['5 User', '10GB Storage','Email Support'], price: '$5.99' },
    { id: 'addon-plan-3', name: 'More Chat', features: ['1 User', '5GB Storage','Email+Whatsapp+Chat Support'], price: '$9.09' },
    { id: 'addon-plan-4', name: 'Sharing', features: ['20 User', '50GB Storage','Email+Whatsapp+Chat Support'], price: '$24.99' },
    { id: 'addon-plan-5', name: '1GB Storage', features: ['1 User', '1GB Storage','Email Support'], price: '$0.99' },
    { id: 'addon-plan-6', name: '5GB Storage', features: ['1 User', '5GB Storage','Email+Chat Support'], price: '$3.45' },
    { id: 'addon-plan-7', name: '10GB Storage', features: ['3 User', '10GB Storage','Email+Whatsapp+Chat Support'], price: '$5.99' },
    { id: 'addon-plan-8', name: '1 User', features: ['1 User', '5GB Storage','Email+Whatsapp+Chat Support'], price: '$4.99' },
    { id: 'addon-plan-9', name: '5 Users', features: ['5 User', '15GB Storage','Email+Whatsapp+Chat Support'], price: '$7.99' },
    { id: 'addon-plan-10', name: '10 Users', features: ['10 User', '50GB Storage','Email+Whatsapp+Chat Support'], price: '$12.99' },
  ];

  const [selectedAddon, setSelectedAddon] = useState(null);

  const handleClick = (id) => {
    setSelectedAddon(id === selectedAddon ? null : id);
  };

  return (
    <div className='page'>
    <div className='addon-row'>
      {addonPlans.map((plan) => (
        <div
          key={plan.id}
          className={`addon-plan ${selectedAddon === plan.id ? 'selected' : ''}`}
          id={plan.id}
          style={{ zIndex: selectedAddon === plan.id ? 1 : 0 }}
          onClick={() => handleClick(plan.id)}
        >
          <h2>{plan.name}</h2>
          <p className='price'>{plan.price}</p>
          <div className='features'>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Addons