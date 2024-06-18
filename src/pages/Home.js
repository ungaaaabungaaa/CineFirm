import React, { useEffect, useRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import '../styles/home.css';
import transition from '../transition';
import slide1 from '../res/slider/1.webp';
import slide2 from '../res/slider/2.webp';
import slide3 from '../res/slider/3.webp';
import slide4 from '../res/slider/4.webp';
import slide5 from '../res/slider/5.webp';

const slides = [slide1, slide2, slide3, slide4, slide5];

const slideContents = [
  {
    client: 'Boba Bhai',
    desc: 'Boba Bhai started it’s journey in mid 2023. serve he best Indianised versions of bubble teas sold across the globe.',
    type: 'Food Photography'

  },
  {
    client: 'Author 2',
    desc: 'Description 2',
    type: 'Food Photography'
  },
  {
    client: 'Author 3',
    desc: 'Description 3',
    type: 'Food'
  },
  {
    client: 'Author 4',
    desc: 'Description 4',
    type: 'Food'
  },
  {
    client: 'Author 5',
    desc: 'Description 5',
    type: 'Food'
  },
];

const Home = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runNextAuto;

  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    const showSlider = (type) => {
      const sliderItemsDom = sliderRef.current.children;
      const thumbnailItemsDom = thumbnailRef.current.children;

      if (type === 'next') {
        sliderRef.current.appendChild(sliderItemsDom[0]);
        thumbnailRef.current.appendChild(thumbnailItemsDom[0]);
        carouselRef.current.classList.add('next');
      } else {
        sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      nextDom.onclick = null;
      prevDom.onclick = null;
      clearTimeout(runNextAuto);
    };
  }, [timeRunning, timeAutoNext]);

  return (
    <div>
      <Header />
      <SideNav />
      <Footer />
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide} alt={`slider ${index + 1}`} />
              <div className="content">
                <div className="author">{slideContents[index].client}</div>
                <div className="topic">{slideContents[index].type}</div>
                <div className="des">{slideContents[index].desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide} alt={`thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">{slideContents[index].client}</div>
              <div className="description">{slideContents[index].type}</div>
            </div>
          </div>
        ))}
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
