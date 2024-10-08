import React from 'react';
import './Home.css'; 
import { Carousel, Button } from 'react-bootstrap'; 
import image1 from './../assets/bronny.png'; 
import image2 from './../assets/M2.avif'; 
import image3 from './../assets/Kat.png'
import image4 from './../assets/VC.png'
import image5 from './../assets/LP.jpeg'
import UpcomingGames from '../components/upcomingGames';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>

<UpcomingGames />
      
      <Carousel>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>2024 NBA Offseason Recap: 20 Things You Should Be Aware Of</h3>
            <p>What’s Changed Since the Celtics Claimed Their 18th Championship? Here’s What You Need to Know Before the Start of the 2024-25 NBA Season.
</p>
            <Button variant="primary" href="https://www.nba.com/news/2024-nba-offseason-20-things-you-need-to-know-that-happened" target="_blank">
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image1}
            alt="Bronny James"
          />
          <Carousel.Caption>
            <h3>LeBron and Bronny Make History as Father-Son Duo in Preseason </h3>
            <p>LeBron and Bronny make history as the first father-son duo to play together in an NBA game, sharing this incredible moment on Bronny's 20th birthday.
            </p>
            <Button variant="primary" href="https://www.nba.com/news/lebron-bronny-james-1st-father-son-duo-to-play-in-preseason" target="_blank">
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image2} // Use your second image
            alt="Dikembe Mutombo"
          />
          <Carousel.Caption>
            <h3>Remembering Dikembe Mutombo: A Giant in the Game</h3>
            <p>Dikembe Mutombo, an 8-time NBA All-Star and 4-time Defensive Player of the Year, is known for his incredible defense and famous finger wag. He inspired many on and off the court. Join us in celebrating his life and legacy.</p>
            <Button variant="primary" href="https://www.nba.com/news/dikembe-mutombo-passes-away" target="_blank">
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="homeImage2"
            src={image4}
            alt="HOF"
          />
          <Carousel.Caption>
            <h3>2024 Hall of Fame: Honoring the legacies of four NBA legends.</h3>
            <p>The 2024 Hall of Fame Class includes 13 inductees, featuring Chauncey Billups, Vince Carter, Michael Cooper, and Walter Davis.</p>
            <Button variant="primary" href="" target="_blank">
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>



      <div className="leaguePass">
  <h3>League Pass</h3>
  
  <br />
  <div className="leaguePassContainer">
    <div className="leaguePassImageContainer">
      <img 
        src={image5}
        alt="NBA League Pass" 
        className="leaguePassImage" 
      />
      <div className="leaguePassOverlay">
      <div className="textBorder">
            <p>Get access to live NBA games, exclusive content, and much more with NBA League Pass. Watch your favorite teams and players from anywhere, anytime!</p>
        </div>
        
        <a 
          href="https://www.nba.com/leaguepass" 
          target="" 
          rel=""
          className="leaguePassButton"
        >
          Try League Pass Free for 7 Days
        </a>
      </div>
      
      
    </div>
  </div>

  





</div>


     <Footer />

     

    </div>



    
  );
}

export default Home;
