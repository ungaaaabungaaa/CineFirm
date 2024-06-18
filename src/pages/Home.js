// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import '../styles/home.css'
import transition from '../transition';
import slide1 from '../res/slider/1.webp';
import slide2 from '../res/slider/2.webp';
import slide3 from '../res/slider/3.webp';
import slide4 from '../res/slider/4.webp';
import slide5 from '../res/slider/5.webp';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <SideNav></SideNav>
      <Footer></Footer>
      <div className='carousel'>
         <div className='list'>
              <div className='item'>
                <img src={slide1} alt="slider 1"/>
                <div className='content'>
                <div class="author">CineFrim</div>
                    <div class="title">Big Bro's</div>
                    <div class="topic">Food PhotoGraphy</div>
                    <div class="des">
                        This image presents a delicious pizza on a rustic wooden board, topped with melted cheese, pepperoni, basil, and vegetables, against a textured wooden table. Surrounding the pizza are fresh ingredients: tomatoes, garlic, basil, olive oil, grated cheese, bell peppers, and bowls of crushed red pepper, oregano, and parmesan, all highlighted by warm, inviting light.
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>Contact Us</button>
                    </div>
                </div>
              </div>
              <div className='item'>
                <img src={slide2} alt="slider 2"/>
                <div className='content'>
                <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
              </div>
              <div className='item'>
                <img src={slide3} alt="slider 3"/>
                <div className='content'>
                <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
              </div>
              <div className='item'>
                <img src={slide4} alt="slider 4"/>
                <div className='content'>
                <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
              </div>
              <div className='item'>
                <img src={slide5} alt="slider 5"/>
                <div className='content'>
                <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
              </div>
         </div>
      </div>

      <div className="thumbnail">
            <div className="item">
                <img src={slide1} />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={slide2} />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={slide3} />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={slide4} />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>

            <div className="item">
                <img src={slide5} />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
      </div>

      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      <div className="time"></div>
        
    </div>
  );
};

export default transition(Home);