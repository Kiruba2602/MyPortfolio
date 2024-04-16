//Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Type from './Type.jsx';
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = ()=>{
    return (
        <div>
            <div className="Homepage">
                <div className="HomeText mt-5">
                    <h1>I'M <strong>Kirubakaran</strong></h1>
                    <Type />
                    <Link to="/About">
                        <button>About Me <BsPerson /></button>
                    </Link>

                    <Link to="/Contact" >
                        <button>Contact <CgPhone /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;