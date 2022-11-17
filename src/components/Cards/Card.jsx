import React from "react";
import  Card from './Cards'
import img1 from "../../assets/img/demo.jpg"

const txt1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore maxime eaque minus! Molestiae nesciunt blanditiis mollitia dolor quae asperiores nam earum distinctio deserunt quasi ipsa, consectetur, beatae, provident nobis.'

const txt2='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

const txt3='at dolore maxime eaque minus! Molestiae nesciunt blanditiis mollitia dolor quae asperiores nam earum distinctio deserunt quasi ipsa, consectets.'

function Cards(){
    
        return(
            <div className="card-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card 
                            imgSrc={img1} 
                            textChild={txt1}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgSrc={img1} 
                        textChild={txt2}/>
                    </div>
                    <div className="col-md-4">
                        <Card 
                        imgSrc={img1}
                        textChild={txt3}
                        />
                    </div>
                </div>
            </div>
        );
   
}

export default Cards;