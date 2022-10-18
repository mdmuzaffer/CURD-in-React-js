import React from "react";
import {Link} from 'react-router-dom';

const Nave = ()=>{
    return(
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                <div class="container">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                        <Link class="nav-link" to="/">Logo</Link>
                        </li>
                        <li class="nav-item ">
                        <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Nave;