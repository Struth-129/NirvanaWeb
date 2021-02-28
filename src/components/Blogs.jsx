import React from 'react';
import '../index.css';
import '../sass/main.scss';
import '../main';

const Blogs = () =>{
    return(
        <>
        <div id="main">
        <article className="post">
        <header>
            <div className="title">
                <h2><a href="single.html">How NIRVANA helps?</a></h2>
                <p>“Your body is your most priceless possession and its mental health is a very thin thread in it, an issue which so many have chosen to ignore.”</p>
            </div>
            <div className="meta">
                <time className="published" datetime="2020-10-25">October 25, 2020</time>
                <a href="#" className="author"><span className="name">Nirvana</span><img src={logo} alt="" /></a>
            </div>
        </header>
        <a href="single.html" className="image featured"><img src={cover} alt="" /></a>
        <p>Struck with mood swings and psychotic pains enfolding your depression? Or Searching for an anxiety slayer and looking for motivation? Well, here comes NIRVANA for your rescue- a Mental Wellness Spa unlocking a range of mindcological tools. 
.</p>
        <footer>
            <ul className="actions">
                <li><a href="single.html" className="button large">Continue Reading</a></li>
            </ul>
            <ul className="stats">
                <li><a href="#">General</a></li>
                <li><a href="#" className="icon solid fa-heart">28</a></li>
                <li><a href="#" className="icon solid fa-comment">128</a></li>
            </ul>
        </footer>
    </article>
    </div>
    </>
    )
    }