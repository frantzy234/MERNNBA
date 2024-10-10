import React from 'react';
import './Home.css'; 
import { Carousel, Button } from 'react-bootstrap'; 
import image1 from './../assets/bronny.png'; 
import image2 from './../assets/M2.avif'; 
import image3 from './../assets/Kat.png';
import image4 from './../assets/VC.png';
import image5 from './../assets/LP.jpeg';
import image6 from './../assets/zacc.png';
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
            alt="2024 NBA Offseason Recap"
          />
          <Carousel.Caption>
            <h3>2024 NBA Offseason Recap: 20 Things You Should Be Aware Of</h3>
            <p>What’s Changed Since the Celtics Claimed Their 18th Championship? Here’s What You Need to Know Before the Start of the 2024-25 NBA Season.</p>
            <Button 
              variant="primary" 
              href="https://www.nba.com/news/2024-nba-offseason-20-things-you-need-to-know-that-happened" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image1}
            alt="LeBron and Bronny James"
          />
          <Carousel.Caption>
            <h3>LeBron and Bronny Make History as Father-Son Duo in Preseason</h3>
            <p>LeBron and Bronny make history as the first father-son duo to play together in an NBA game, sharing this incredible moment on Bronny's 20th birthday.</p>
            <Button 
              variant="primary" 
              href="https://www.nba.com/news/lebron-bronny-james-1st-father-son-duo-to-play-in-preseason" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image2}
            alt="Dikembe Mutombo"
          />
          <Carousel.Caption>
            <h3>Remembering Dikembe Mutombo: A Giant in the Game</h3>
            <p>Dikembe Mutombo, an 8-time NBA All-Star and 4-time Defensive Player of the Year, is known for his incredible defense and famous finger wag. He inspired many on and off the court. Join us in celebrating his life and legacy.</p>
            <Button 
              variant="primary" 
              href="https://www.nba.com/news/dikembe-mutombo-passes-away" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image4}
            alt="2024 Hall of Fame Class"
          />
          <Carousel.Caption>
            <h3>2024 Hall of Fame: Honoring the legacies of four NBA legends.</h3>
            <p>The 2024 Hall of Fame Class includes 13 inductees, featuring Chauncey Billups, Vince Carter, Michael Cooper, and Walter Davis.</p>
            <Button 
              variant="primary" 
              href="https://www.nba.com/news/2024-hall-of-fame-profiles" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="homeImage2"
            src={image6}
            alt="Zaccharie Risacher Preseason Debut"
          />
          <Carousel.Caption>
            <h3>Hawks' Zaccharie Risacher Shines in Preseason Debut</h3>
            <p>No. 1 overall draft choice Zaccharie Risacher tallies 18 points on 7-of-9 shooting, along with 3 rebounds and 2 assists in Atlanta's preseason opener.</p>
            <Button 
              variant="primary" 
              href="https://www.nba.com/watch/video/risacher-impresses-in-preseason-debut" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="leaguePass">
        <h3>NBA League Pass</h3>
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
                target="_blank" 
                rel="noopener noreferrer"
                className="leaguePassButton"
              >
                Try League Pass Free for 7 Days
              </a>
            </div>
          </div>
        </div>
      </div>

   
      <div className="gifHighlights">
  <h3> Remembering WOW Moments 🤯</h3> 
  <div className="gifContainer">
    <img 
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FxZWNjZDA4a3l0b3pwc2o5MW9tcWJ2cGVidjAzaTluZncyeTQ3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hdPejk7oTRJalW4Dwj/giphy.webp" 
      alt="NBA Highlight 1" 
    />
    <img 
      src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzV1Ym51NmI0b2hkd2llaGQ3enRnN3kxOGVwZmM3Mjljc2xya3QxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2BhukQ7kNkDj9u/giphy.gif" 
      alt="NBA Highlight 2" 
    />
    <img 
      src="https://media1.tenor.com/m/xJIif7fVqfUAAAAd/kawhi-the-shot.gif" 
      alt="NBA Highlight 3" 
    />
    <img 
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG9vamV3Mm53eW13NzFjdm4xY3h1MmVlZmllZDRodXU0ZGo5eDhucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qAZloNlpuwo5oSQ/giphy.webp" 
      alt="NBA Highlight 4" 
    />
    <img 
      src="https://i.pinimg.com/originals/b4/bd/a8/b4bda82b6ac1ae69e6c9f9760a6f2030.gif" 
      alt="NBA Highlight 5" 
    />

  </div>
      </div>


      

      <Footer />
    </div>
  );
}

export default Home;
