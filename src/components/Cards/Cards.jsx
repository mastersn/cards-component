import React from 'react';

import "./Card.css"

const txtDefault = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis unde repudiandae, officia cumque beatae sit. Excepturi molestiae architecto accusamus consequuntur fuga. Quae non voluptatibus rerum veritatis deserunt ratione ab autem"

export default function App({ 
  imgSrc, 
  textChild=txtDefault,
  btnName="Button"
}) {
  return (
    <div className="card text-center">
        <div className="overflow ">
            <img src={imgSrc} alt="image 1" className='card-img-top' />
        </div>
        <div className="card-body">
            <h4 className="card-title">Card title </h4>
            <p className="card-text cars-text-secondary">
                {textChild}
                
            </p>
            <a href="#" className="btn btn-outline-success" > {btnName}</a>
        </div>
    </div>
  );
}