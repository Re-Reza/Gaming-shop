import React from "react";
import { Link } from 'react-router-dom';

export function NavLinks() {

    return (
        <ul className="nav-bottom-linkContainer">

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to="/products/laptop">Laptop</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to="/products/chair">Chair</Link>
                    </li>

                </ul>
            </li>

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to="/products/monitor">Monitor</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to="/products/headphone">Headphone</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to="/products/keyboard">Keyboard</Link>
                    </li>
                </ul>
            </li>

            <li className="nav-bottom-linkItem">
                <ul className="nav-bottom-linkPartContainer">
                    <li>
                        <Link className="nav-bottom-link" to="/products/mouse">Mouse</Link>
                    </li>

                    <li>
                        <Link className="nav-bottom-link" to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link className="nav-bottom-link" to="/">Contact us</Link>
                    </li>
                </ul>
            </li>

        </ul>
    )
}
{/* <li>
<Link className="nav-bottom-link" to="/admin">Admin</Link>
</li> */}