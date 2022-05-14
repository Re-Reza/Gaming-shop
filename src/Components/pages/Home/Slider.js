import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../../../img/pic1.jpg'
import pic2 from '../../../img/pic2.jpg';
import pic3 from '../../../img/pic3.jpg';
// import fdg from '../../../../img/'
export function Slider() {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div >
    )
}