import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";
import style from "../css/style.module.css";
import Menu from "./Menu";


// export async function getServerSideProps(){
//     const res = await fetch('https://restcountries.com/v3.1/all');
//     const json = await res.json();
//
//     return{
//         props:{countryList:JSON.stringify(json)}
//     }
//
//
// }

// export async function getStaticProps(){
//     return {
//         props:{
//             API_KEY:process.env.API_KEY
//         }
//     }
// }





class Index extends Component {
    render() {
        return (
            <div>

              <Menu/>
               <h1 className={style.text}>This is Home Page</h1>
                {/*<h1>API KEY:{this.props.API_KEY}</h1>*/}
                <img src="images/mithunbanerjee.jpg"/>

                <button className="btn btn-primary">My button</button>
            </div>
        );
    }
}

export default Index;