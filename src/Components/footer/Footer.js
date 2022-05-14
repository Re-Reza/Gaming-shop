import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {

    render() {
    
        if(window.location.pathname == this.props.hideRoute)
            return <></>

        return (
            <div id="footer">
                <div className="footer-top">
                    <div className="footer-leftPart">
                        <h3>Gaming shop</h3>
                    </div>
                    <div className="footer-middlePart">
                        <ul>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/">About us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-rightPart">
                        <div className="footer-rightPart-icons">
                            <span><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></span>
                            <span><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></span>
                            <span><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></span>
                            <span><Link to="/"></Link><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    Copyright &copy; Gaming shop-All right reserved
                </div>

            </div>
        )
    }
}