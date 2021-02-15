import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Side from '../components/Side';
import Chatbot from '../components/Chatbot';
import '../main';
import '../util';
import Home from '../components/Home';
import logo from '../images/logo.png';
const About = () =>{
    return(
        <>
        <div id = "wrapper">
            <Header/>
                <div id="main">
                <article class="post">
					<header>
						<div class="title">
							<h2><a href="#">NIRVANA</a></h2>
							<p style = {{fontStyle:"italic"}}>Mindfulness is full presence and conviction in the moment, it’s like living in the moment</p>
						</div>
						<div class="meta">
							<time class="published" datetime="2015-11-01">March 1, 2021</time>
							<a href="/about" class="author"><span class="name">Nirvana team</span><img src={logo} alt="" /></a>
						</div>
					</header>
					<span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
					<p>Nirvana is a team of enthusiasts exploring the untouched spheres of the mental health. With a mission to quantify the burden of those suffering from depression, mental, select neurological or substance problems by creating awareness and developing mental health system we carry our work ahead by working on our idea to provide a truly personalised user experience to combat mental health issues by bridging the gap and hence calm the oscillation of mind towards stability.</p>
					<p>We aim to reach out to everyone to help them relax by the practice of the NIRI Test and NIRI tips based on extensive research and expertise suggestions. Nirvana helps making identification and treatment easy and secure by its encrypted E- counsel and wellness features for all groups of people. </p>
					<p>Nirvana is your ‘Mental Wellness Spa’. 
                        It is simple and easy to use all-in-one development package to bounce you back from your disappointment and psychotic pains and at the same time help you discover ways to tap into your own resilience. Nirvana works in very unique and systematic way encompassing attributes like Yoga, Meditation, Therapy, Health Quantifier, Health blogs, Relaxing music and podcasts, Goal tracker and above all, the intelligent AI based chat bot NIRI.
                        Nirvana helps you attain mindfulness in every possible way as you unzip;
                    </p>
                    <ul>
                        <li><strong>NIRI</strong> : Your friend at Nirvana</li>
                        <li><strong>E-Mantrana</strong> : Your room to therapy</li>
                        <li><strong>Chetna</strong> : Your guide to Yog and meditation</li>
                        <li><strong>Medicpen</strong> : Your place to read</li>
                        <li><strong>Soul</strong> : Your escape into chords</li>
                        <li><strong>Saarini</strong> : Your chores synchronised</li>
                        <li><strong>Dharma </strong> : Your purpose to life</li>
                        <li><strong>Nirvaan</strong> : Your store to happiness </li>
                        <li><strong>NIRI Test</strong> : Your step towards detection</li>
                    </ul>
                    <p><strong>Why Nirvana:</strong><br></br>
                With changing health patterns among Indians, mental, behavioural and substance use disorders are coming to the fore in health care delivery systems. These disorders contribute for significant morbidity, disability and even mortality amongst those affected. Due to the prevailing stigma, these disorders often are hidden by the society and consequently persons with mental disorders lead a poor quality of life. 
                Even though several studies point to the growing burden, the extent, pattern and outcome of these mental, behavioural and substance use disorders are not clearly known. Though unmeasured, the social and economic impact of these conditions is huge. It is also acknowledged that mental health programmes and services need significant strengthening and / or scaling up to deliver appropriate and comprehensive services for the millions across the country who are in need of care.
                Nirvana is one such step towards catering the needs of those people, recognising the need for good quality, scientific and reliable information to strengthen mental health.
                    </p>
                    <p style={{fontStyle:"italic"}}>Thank you</p>
                    <p style={{fontStyle:"italic"}}>Nirvana Team</p>
                    <footer>
						<ul class="stats">
				  			<li><a href="#">General</a></li>
				   			<li><a href="#" class="icon solid fa-heart">28</a></li>
						</ul>
					</footer>
				</article>
                </div>
            <Side/>
        </div>
         <Chatbot/>
        </>
    );
};

export default About; 