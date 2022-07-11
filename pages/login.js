import React, {Component} from 'react';
import Link from "next/link";

class Login extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
                <h1>This is Login Page</h1>
            </div>
        );
    }
}

export default Login;