import React from 'react';
import '../index.css';
import '../sass/main.scss';
import '../main';
import cover from '../images/cover.png';
import logo from '../images/logo.png';
import med from '../images/med.png';
import strt from '../images/strt.png';

function Home(){
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
    <article className="post">
        <header>
            <div className="title">
                <h2><a href="single.html">MEDITATION</a></h2>
                <p>“Meditation is a way for nourishing and blossoming the divinity within you.”</p>
            </div>
            <div className="meta">
                <time className="published" datetime="2020-10-25">October 25, 2020</time>
                <a href="#" className="author"><span className="name">Nirvana</span><img src={logo} alt="" /></a>
            </div>
        </header>
        <a href="single.html" className="image featured"><img src={med} alt="" /></a>
        <p>Meditation is the delicate art of doing nothing but letting go of all the efforts to relax into your factual nature and exploring a special place where each and every place is momentou.</p>
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
    <article className="post">
        <header>
            <div className="title">
                <h2><a href="single.html">Getting started with mindfulness</a></h2>
                <p>“Mindfulness is full presence and conviction in the moment, it’s like living in the moment” </p>
            </div>
            <div className="meta">
                <time className="published" datetime="2020-10-22">October 22, 2020</time>
                <a href="#" className="author"><span className="name">NIRVANA</span><img src={logo} alt="" /></a>
            </div>
        </header>
        <a href="single.html" className="image featured"><img src={strt} alt="" /></a>
        <p>Mindfulness is being aware of your feelings and experiences, unhooking from your anxious thoughts, calming the nervous system to rest your emotions in the present moment and let go of being pulled around by unhelpful thoughts and emotions.  When you become aware of the present moment, you gain access to resources you may not have realized were with you all along— “a stillness at your core”.
</p>
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
    <ul className="actions pagination">
								<li><a href="" className="disabled button large previous">Previous Page</a></li>
								<li><a href="#" className="button large next">Next Page</a></li>
							</ul>

					</div>
        </>
    );
}


export default Home;