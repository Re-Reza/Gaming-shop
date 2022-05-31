import React from "react";
import { Link } from 'react-router-dom';
import MAIN_URL from"../MAINURL";

export function NavLinks() {


    return (
        <ul className="nav-bottom-linkContainer">

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL}>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/laptop"}>Laptop</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/chair"}>Chair</Link>
                    </li>

                </ul>
            </li>

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/monitor"}>Monitor</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/headphone"}>Headphone</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/keyboard"}>Keyboard</Link>
                    </li>
                </ul>
            </li>

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/products/mouse"}>Mouse</Link>
                    </li>

                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL+"/cart"}>Cart</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to={MAIN_URL}>Contact us</Link>
                    </li>
                </ul>
            </li>

        </ul>
    )
}
