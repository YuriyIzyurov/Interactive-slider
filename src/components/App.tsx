import * as React from 'react';
import './../assets/scss/App.scss';
import { Dispatch, useEffect, useRef, useState } from 'react';
import AnimatedCircle from '../components/AnimatedCircle';
import Pagination from '../components/Pagination';
import { clickRotator } from '../utility/functions';
import { Slider } from '../components/Slider';
import gsap from 'gsap';
import {
   Theatre,
   Films,
   item1Positions,
   item2Positions,
   item3Positions,
   item4Positions,
   item5Positions,
   item6Positions,
   itemPositionsType,
   Literature,
   Games,
   Rotations,
   Science,
   Cosmos,
   CosmosSlides,
   FilmSlides,
   LiteratureSlides,
   TheatreSlides,
   GamesSliders,
   ScienceSliders,
} from '../utility/constants';

export type SlidersType = {
   title: string;
   slides: string[][];
};
const App = () => {
   const wheel = useRef<HTMLUListElement>(null);

   const [isItem1Active, setItem1Active] = useState<boolean>(true);
   const [isItem2Active, setItem2Active] = useState<boolean>(false);
   const [isItem3Active, setItem3Active] = useState<boolean>(false);
   const [isItem4Active, setItem4Active] = useState<boolean>(false);
   const [isItem5Active, setItem5Active] = useState<boolean>(false);
   const [isItem6Active, setItem6Active] = useState<boolean>(false);

   const [wheelPosition, setWheelPosition] = useState<number>(1);
   const [digitRotation, setDigitRotation] = useState<Rotations | null>(null);

   const [currentDate1, setCurrentDate1] = useState<number>(Cosmos[0]);
   const [currentDate2, setCurrentDate2] = useState<number>(Cosmos[1]);

   const [activePage, setActivePage] = useState<number>(1);

   const [currentSlides, setSlides] = useState<SlidersType>({
      title: 'Космос',
      slides: CosmosSlides,
   });

   const CalculateGsapEffect = (width) => {
      if (width) {
         gsap
            .timeline()
            .fromTo('.slider', { opacity: 1 }, { opacity: 0, duration: 0.3 })
            .to('.slider', { y: '+=20', duration: 0.1 })
            .to('.slider', { opacity: 1, y: '-=20', duration: 0.5 });
      } else {
         gsap
            .timeline()
            .fromTo('.slider', { opacity: 1 }, { opacity: 0, duration: 0.3 })
            .to('.slider', { opacity: 1, duration: 0.5 });
      }
   };

   useEffect(() => {
      CalculateGsapEffect(window.innerWidth < 321);
      if (isItem1Active) {
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
      if (isItem2Active) {
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
      if (isItem3Active) {
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
      if (isItem4Active) {
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
      if (isItem5Active) {
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
      if (isItem6Active) {
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
      isItem1Active,
      isItem2Active,
      isItem3Active,
      isItem4Active,
      isItem5Active,
      isItem6Active,
   ]);

   const deactivePreviousItem = (itemNumber: number) => {
      if (itemNumber === 2) {
         setItem2Active(false);
         gsap.fromTo(
            '.description2',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
      if (itemNumber === 1) {
         setItem1Active(false);
         gsap.fromTo(
            '.description1',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
      if (itemNumber === 3) {
         setItem3Active(false);
         gsap.fromTo(
            '.description3',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
      if (itemNumber === 4) {
         setItem4Active(false);
         gsap.fromTo(
            '.description4',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
      if (itemNumber === 5) {
         setItem5Active(false);
         gsap.fromTo(
            '.description5',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
      if (itemNumber === 6) {
         setItem6Active(false);
         gsap.fromTo(
            '.description6',
            { opacity: 1 },
            { opacity: 0, duration: 0.2 },
         );
      }
   };

   const changeDates = (
      desirableDate: number,
      currentDate: number,
      setCurrentDate: Dispatch<number>,
   ) => {
      const time = 500;
      let number = currentDate;
      if (currentDate === desirableDate) return;
      const t = Math.round(time / Math.abs(desirableDate - currentDate));
      const interval = setInterval(() => {
         if (desirableDate - currentDate > 0) {
            number++;
         } else {
            number--;
         }
         if (number === desirableDate) {
            clearInterval(interval);
         }
         setCurrentDate(number);
      }, t);
   };

   const handleActivePage = (currentPage: number, desirablePage: number) => {
      const chooseActiveItem = (page) => {
         switch (page) {
            case 1:
               return setItem1Active(true);
            case 2:
               return setItem2Active(true);
            case 3:
               return setItem3Active(true);
            case 4:
               return setItem4Active(true);
            case 5:
               return setItem5Active(true);
            case 6:
               return setItem6Active(true);
         }
      };

      switch (currentPage) {
         case 1:
            setItem1Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(1, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description1',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
         case 2:
            setItem2Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(2, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description2',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
         case 3:
            setItem3Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(3, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description3',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
         case 4:
            setItem4Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(4, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description4',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
         case 5:
            setItem5Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(5, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description5',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
         case 6:
            setItem6Active(false);
            chooseActiveItem(desirablePage);
            setWheelPosition(desirablePage);
            clickRotator(6, desirablePage, wheel.current, setDigitRotation);
            gsap.fromTo(
               '.description6',
               { opacity: 1 },
               { opacity: 0, duration: 0.2 },
            );
            break;
      }
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
            <AnimatedCircle
               item1Positions={item1Positions}
               digit={1}
               isItemActive={isItem1Active}
               setItemActive={setItem1Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Космос'}
            />
            <AnimatedCircle
               item1Positions={item2Positions}
               digit={2}
               isItemActive={isItem2Active}
               setItemActive={setItem2Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Кино'}
            />
            <AnimatedCircle
               item1Positions={item3Positions}
               digit={3}
               isItemActive={isItem3Active}
               setItemActive={setItem3Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Литература'}
            />
            <AnimatedCircle
               item1Positions={item4Positions}
               digit={4}
               isItemActive={isItem4Active}
               setItemActive={setItem4Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Театр'}
            />
            <AnimatedCircle
               item1Positions={item5Positions}
               digit={5}
               isItemActive={isItem5Active}
               setItemActive={setItem5Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Игры'}
            />
            <AnimatedCircle
               item1Positions={item6Positions}
               digit={6}
               isItemActive={isItem6Active}
               setItemActive={setItem6Active}
               wheelPosition={wheelPosition}
               setWheelPosition={setWheelPosition}
               wheel={wheel}
               setDigitRotation={setDigitRotation}
               digitRotation={digitRotation}
               deactivePreviousItem={deactivePreviousItem}
               description={'Наука'}
            />
         </ul>
         <div className="dates">
            <span>{currentDate1}</span>
            <span>{currentDate2}</span>
         </div>
         <Pagination setActivePage={handleActivePage} activePage={activePage} />
         <Slider currentSlides={currentSlides} />
      </div>
   );
};

export default App;
