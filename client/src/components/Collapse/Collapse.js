import React, { useState } from 'react';

const Collapse = ({title, spec}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle accordion
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Rotate the arrow icon
  const handleRotate = () => (isOpen ? 'rotate-180' : '');

  // Toggle content height
  const handleToggle = () => ({
    maxHeight: isOpen ? '500px' : '0',
  });

  return (
    <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl my-2">
      <div onClick={handleClick} className="w-full p-4 text-left cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="tracking-wide">{title}</span>
          <span className={`transition-transform duration-500 transform fill-current ${handleRotate()}`}>
            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>
        <hr/>
      <div style={handleToggle()} className="relative overflow-hidden transition-all duration-700 max-h-0 mt-2">
        <div className="px-6 pb-4 text-gray-600">
          {spec}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
