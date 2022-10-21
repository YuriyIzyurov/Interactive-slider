import * as React from 'react';
import './../assets/scss/App.scss';
import { Dispatch, useEffect, useRef, useState, useReducer } from 'react';
import AnimatedCircle from '../components/AnimatedCircle';
import Pagination from '../components/Pagination';
import {
   CalculateGsapEffect,
   changeDates,
   clickRotator,
} from '../utility/functions';
import { Slider } from '../components/Slider';
import gsap from 'gsap';
import {
   Theatre,
   Films,
   Literature,
   Games,
   Science,
   Cosmos,
   CosmosSlides,
   FilmSlides,
   LiteratureSlides,
   TheatreSlides,
   GamesSliders,
   ScienceSliders,
   SlidersType,
} from '../utility/constants';
import { initialState, reducer } from '../utility/reducer';

const App = () => {
   const wheel = useRef<HTMLUListElement>(null);

   const [state, dispatch] = useReducer(reducer, initialState);

   const [currentDate1, setCurrentDate1] = useState<number>(Cosmos[0]);
   const [currentDate2, setCurrentDate2] = useState<number>(Cosmos[1]);

   const [activePage, setActivePage] = useState<number>(1);

   const [currentSlides, setSlides] = useState<SlidersType>({
      title: 'Космос',
      slides: CosmosSlides,
   });

   useEffect(() => {
      CalculateGsapEffect(window.innerWidth < 321);
      if (state.isItem1Active) {
         changeDates(Cosmos[0], currentDate1, setCurrentDate1);
         changeDates(Cosmos[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Космос', slides: CosmosSlides });
         }, 200);
         setActivePage(1);
         gsap.fromTo(
            '.description1',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
      if (state.isItem2Active) {
         changeDates(Films[0], currentDate1, setCurrentDate1);
         changeDates(Films[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Кино', slides: FilmSlides });
         }, 200);
         setActivePage(2);
         gsap.fromTo(
            '.description2',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
      if (state.isItem3Active) {
         changeDates(Literature[0], currentDate1, setCurrentDate1);
         changeDates(Literature[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Литература', slides: LiteratureSlides });
         }, 200);
         setActivePage(3);
         gsap.fromTo(
            '.description3',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
      if (state.isItem4Active) {
         changeDates(Theatre[0], currentDate1, setCurrentDate1);
         changeDates(Theatre[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Театр', slides: TheatreSlides });
         }, 200);
         setActivePage(4);
         gsap.fromTo(
            '.description4',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
      if (state.isItem5Active) {
         changeDates(Games[0], currentDate1, setCurrentDate1);
         changeDates(Games[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Игры', slides: GamesSliders });
         }, 200);
         setActivePage(5);
         gsap.fromTo(
            '.description5',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
      if (state.isItem6Active) {
         changeDates(Science[0], currentDate1, setCurrentDate1);
         changeDates(Science[1], currentDate2, setCurrentDate2);
         setTimeout(() => {
            setSlides({ title: 'Наука', slides: ScienceSliders });
         }, 200);
         setActivePage(6);
         gsap.fromTo(
            '.description6',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, delay: 0.9 },
         );
         return;
      }
   }, [
      state.isItem1Active,
      state.isItem2Active,
      state.isItem3Active,
      state.isItem4Active,
      state.isItem5Active,
      state.isItem6Active,
   ]);

   const deactivePreviousItem = (itemNumber: number) => {
      gsap.fromTo(
         `.description${itemNumber}`,
         { opacity: 1 },
         { opacity: 0, duration: 0.2 },
      );
      dispatch({ type: `setItem${itemNumber}Active`, payload: false });
   };

   const handleActivePage = (currentPage: number, desirablePage: number) => {
      dispatch({ type: `setItem${currentPage}Active`, payload: false });
      dispatch({ type: `setItem${desirablePage}Active`, payload: true });
      dispatch({ type: 'setWheelPosition', payload: desirablePage });
      clickRotator(currentPage, desirablePage, wheel.current, dispatch);
      gsap.fromTo(
         `.description${currentPage}`,
         { opacity: 1 },
         { opacity: 0, duration: 0.2 },
      );
   };

   return (
      <div className="app">
         <div className="background">
            <div className="background__top"></div>
            <div className="background__top"></div>
            <div className="background__bottom"></div>
            <div className="background__bottom"></div>
            <div className="background__wheel"></div>
         </div>
         <h1 className="title">Исторические даты</h1>
         <ul className="carousel" ref={wheel}>
            {Array.from({ length: 6 }).map((item, index) => (
               <AnimatedCircle
                  key={index}
                  digit={index + 1}
                  state={state}
                  dispatch={dispatch}
                  wheel={wheel}
                  deactivePreviousItem={deactivePreviousItem}
               />
            ))}
         </ul>
         <div className="dates">
            <span>{currentDate1}</span>
            <span>{currentDate2}</span>
         </div>
         <Pagination setActivePage={handleActivePage} activePage={activePage} />
         <Slider currentSlides={currentSlides} activePage={activePage} />
      </div>
   );
};

export default App;
