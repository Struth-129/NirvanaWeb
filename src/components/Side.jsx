import React from 'react';
import '../index.css';
import '../sass/main.scss';
import '../main';
import logo from '../images/logo.png';
import cover from '../images/cover.png';

function Side (){
    return (
        <>
        <section id="sidebar">
    <section id="intro">
        <a href="/" className="logo"><img src={logo} alt="" /></a>
        <header>
            <h2>Nirvana</h2>
            <p> The simple, easy and secure mental health solution.
            <a href="">NIRVANA</a></p>
        </header>
    </section>
    <section>
        <div class="mini-posts">
                <article class="mini-post">
                    <header>
                        <h3><a href="single.html">Name</a></h3>
                        <time class="published" datetime="2015-10-20">February 20, 2020</time>
                        <a href="/home" class="author"><img src={logo} alt="" /></a>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
                <article class="mini-post">
                    <header>
                        <h3><a href="single.html">Name</a></h3>
                        <time class="published" datetime="2015-10-19">October 19, 2015</time>
                        <a href="#" class="author"><img src={logo} alt="" /></a>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
                <article class="mini-post">
                    <header>
                        <h3><a href="single.html">Name</a></h3>
                        <time class="published" datetime="2015-10-18">October 18, 2015</time>
                        <a href="#" class="author"><img src={logo} alt="" /></a>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
                <article class="mini-post">
                    <header>
                        <h3><a href="single.html">Name</a></h3>
                        <time class="published" datetime="2015-10-17">October 17, 2015</time>
                        <a href="#" class="author"><img src={logo} alt="" /></a>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>

        </div>
    </section>
    <section>
        <ul class="posts">
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Saket Srivastava</a></h3>
                        <time class="published" datetime="2015-10-20">October 20, 2015</time>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">sasas</a></h3>
                        <time class="published" datetime="2015-10-15">October 15, 2015</time>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">sasasasr</a></h3>
                        <time class="published" datetime="2015-10-10">October 10, 2015</time>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">asasas</a></h3>
                        <time class="published" datetime="2015-10-08">October 8, 2015</time>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">asasas</a></h3>
                        <time class="published" datetime="2015-10-06">October 7, 2015</time>
                    </header>
                    <a href="single.html" class="image"><img src={cover} alt="" /></a>
                </article>
            </li>
        </ul>
    </section>
    <section class="blurb">
        <h2>About Us</h2>
        <p>We aim to reach out to everyone to help them relax by the practice of the NIRI Test and NIRI tips based on extensive research and expertise suggestions. Nirvana helps making identification and treatment easy and secure by its encrypted E- counsel and wellness features for all groups of people.
.</p>
        <ul class="actions">
            <li><a href="/about" class="button">Learn More</a></li>
        </ul>
    </section>
    <section id="footer">
        <ul class="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon solid fa-rss"><span class="label">RSS</span></a></li>
            <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
        </ul>
        <p class="copyright">&copy; NIRVANA: <a href="#">Nirvana</a>. <a href="">All right received</a>.</p>
    </section>

</section>
                            </>
    );
}


export default Side;