import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";
import style from "../css/style.module.css";
class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Home</title>

                    <meta charSet="UTF-8"/>
                    <meta name="description" content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>

                     <meta name="keywords"  content="Mithun Banerjee,Learn With Mithun Banerjee,Mobile App Development Tutorial Bangla, Web Development Tutorial Bangla, Software Development Tutorial Bangla,Laravel Tutorial bangla, React Tutorial Bangla, Android Tutorial Bangla, React Native Tutorial Bangla, Programming Tutorial Bangla, JavaScript Tutorial Bangla"/>

                     <meta name="author" content="Rabbil Hasan"/>


                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                      <meta name="mobile-web-app-capable" content="yes"/>
                      <meta name="apple-mobile-web-app-capable" content="yes"/>
                      <meta name="application-name" content="মিঠুন ব্যানার্জী"/>
                      <meta name="apple-mobile-web-app-title" content="লার্ন উইথ িঠুন ব্যানার্জী"/>

                      <meta name="theme-color" content="#FF0000"/>

                      <meta property="og:site_name" content="mithun.com"/>
                      <meta property="og:url" content=""/>
                      <meta property="og:title" content="লার্ন উইথ িঠুন ব্যানার্জী"/>

                      <meta property="og:description" content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "/>

                      <meta property="og:image"  content="https://mithun.com/storage/indexseo.png"/>

                </Head>





                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
               <h1 className={style.text}>This is Home Page</h1>
                <img src="images/mithunbanerjee.jpg"/>

                <button className="btn btn-primary">My button</button>
            </div>
        );
    }
}

export default Index;