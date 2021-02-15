import React from 'react';
import '../index.css';
import '../sass/main.scss';
import '../main';
function Header () {
	
    return(
        <>
        <header id="header">
			<h1><a href="index.html">Nirvana</a></h1>
			<nav class="links">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Music</a></li>
					<li><a href="#">Blogs</a></li>
					<li><a href="/about">About Us</a></li>
				</ul>
			</nav>
			<nav class="mobile">
				<ul>
					<li><a href="#"></a></li>
				</ul>
			</nav>
			<nav class="main">
					<ul>
					<li class="search">
						<a class="fa-search" href="#search">Search</a>
						<form id="search" method="get" action="#">
			    			<input type="text" name="query" placeholder="Search" />
						</form>
					</li>
		    		<li class="menu">
						<a class="fa-bars" href="#menu">Menu</a>
					</li>
				</ul>
			</nav>
		</header>
		<section id="menu">
							<section>
								<form class="search" method="get" action="#" autoComplete="off">
									<input type="text" name="query" placeholder="Search" autoComplete="off" />
								</form>
							</section>
							<section>
								<ul class="links">
									<li>
										<a href="/Test">
											<h3>Nirvana Stress test</h3>
											<p>Some content here</p>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Yoga/Medidation</h3>
											<p>Some content here</p>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Take a tour</h3>
											<p>Some content here</p>
										</a>
									</li>
									<li>
										<a href="#">
											<h3>Niri </h3>
											<p>Some content here</p>
										</a>
									</li>
								</ul>
							</section>
							<section>
								<ul class="actions stacked">
									<li><a href="#" class="button large fit">Log In</a></li>
								</ul>
								<ul class="actions stacked">
									<li><a href="/signin" class="button large fit">Sign Up</a></li>
								</ul>
							</section>

					</section>
        </>
    );
}

export default Header;