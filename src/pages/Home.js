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
    author: 'Author 1',
    name: 'Title 1',
    desc: 'Description 1',
  },
  {
    author: 'Author 2',
    name: 'Title 2',
    desc: 'Description 2',
  },
  {
    author: 'Author 3',
    name: 'Title 3',
    desc: 'Description 3',
  },
  {
    author: 'Author 4',
    name: 'Title 4',
    desc: 'Description 4',
  },
  {
    author: 'Author 5',
    name: 'Title 5',
    desc: 'Description 5',
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
                <div className="author">{slideContents[index].author}</div>
                <div className="title">{slideContents[index].name}</div>
                <div className="topic">Food Photography</div>
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
              <div className="title">{slideContents[index].name}</div>
              <div className="description">{slideContents[index].desc}</div>
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
