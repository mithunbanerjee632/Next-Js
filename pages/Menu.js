import React, {Component} from 'react';
import Link from "next/link";
import Router from "next/router";

class Menu extends Component {
    render() {
        return (
            <div>



                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href={{pathname:"/about",query:{firstName:"mithun",lastName:"banerjee"}}}>About</Link></li>
                    <li><button onClick={()=>Router.push('/about')}>About</button></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;