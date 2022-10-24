import TweenLite from 'gsap';
import { Dispatch } from 'react';
import gsap from 'gsap';
import { ActionType } from '../utility/reducer';
import {
   Cosmos,
   CosmosSlides,
   Films,
   FilmSlides,
   Games,
   GamesSliders,
   Literature,
   LiteratureSlides,
   Rotations,
   Science,
   ScienceSliders,
   slideInfoType,
   Theatre,
   TheatreSlides,
} from '../utility/constants';

export const CalculateGsapEffect = (width) => {
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
export const chooseSlides = (number: number): slideInfoType => {
   switch (number) {
      case 1:
         return {
            activePage: 1,
            title: 'Космос',
            dates: Cosmos,
            slides: CosmosSlides,
         };
      case 2:
         return {
            activePage: 2,
            title: 'Кино',
            dates: Films,
            slides: FilmSlides,
         };
      case 3:
         return {
            activePage: 3,
            title: 'Литература',
            dates: Literature,
            slides: LiteratureSlides,
         };
      case 4:
         return {
            activePage: 4,
            title: 'Театр',
            dates: Theatre,
            slides: TheatreSlides,
         };
      case 5:
         return {
            activePage: 5,
            title: 'Игры',
            dates: Games,
            slides: GamesSliders,
         };
      case 6:
         return {
            activePage: 6,
            title: 'Наука',
            dates: Science,
            slides: ScienceSliders,
         };
   }
};
export const setPageAndDates = (
   pageNumber: number,
   currentDate1: number,
   currentDate2: number,
   dispatch: Dispatch<ActionType>,
) => {
   const slides = chooseSlides(pageNumber);
   changeDates(slides.dates[0], currentDate1, dispatch, 'setCurrentDate1');
   changeDates(slides.dates[1], currentDate2, dispatch, 'setCurrentDate2');
   dispatch({ type: 'setActivePage', payload: slides.activePage });
   gsap.to(`.description${slides.activePage}`, {
      opacity: 1,
      duration: 0.6,
      delay: 0.4,
   });
};
export const deactivatePreviousItem = (
   itemNumber: number,
   callback: Dispatch<ActionType>,
) => {
   gsap.to(`.description${itemNumber}`, { opacity: 0, duration: 0.2 });
   callback({ type: `setItem${itemNumber}Active`, payload: false });
};
export const gsapRotator = (
   wheelPosition: number,
   digit: number,
   item: HTMLUListElement,
   setDigitRotation: Dispatch<ActionType>,
) => {
   if (digit - wheelPosition === 1 || digit - wheelPosition === -5) {
      gsap.to(item, {
         rotation: Rotations.negative1,
      });
      setDigitRotation({
         type: 'setDigitRotation',
         payload: Rotations.positive1,
      });
      return;
   }
   if (digit - wheelPosition === 2 || digit - wheelPosition === -4) {
      gsap.to(item, {
         rotation: Rotations.negative2,
      });
      setDigitRotation({
         type: 'setDigitRotation',
         payload: Rotations.positive2,
      });
      return;
   }
   if (Math.abs(digit - wheelPosition) === 3) {
      gsap.to(item, {
         rotation: Rotations.positive3,
      });
      setDigitRotation({
         type: 'setDigitRotation',
         payload: Rotations.negative3,
      });
      return;
   }
   if (digit - wheelPosition === 4 || digit - wheelPosition === -2) {
      TweenLite.to(item, {
         rotation: Rotations.positive2,
      });
      setDigitRotation({
         type: 'setDigitRotation',
         payload: Rotations.negative2,
      });
      return;
   }

   if (digit - wheelPosition === 5 || digit - wheelPosition === -1) {
      TweenLite.to(item, {
         rotation: Rotations.positive1,
      });
      setDigitRotation({
         type: 'setDigitRotation',
         payload: Rotations.negative1,
      });
      return;
   }
};
export const changeDates = (
   desirableDate: number,
   currentDate: number,
   callback: Dispatch<ActionType>,
   type: string,
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
      callback({ type: type, payload: number });
   }, t);
};

export const calculatePosition = (value, axis, itemPositions) => {
   let initialPosition;
   let resultPosition;
   if (axis === 'y') {
      initialPosition = itemPositions.y[1];
      resultPosition = itemPositions.y[0];
   } else {
      initialPosition = itemPositions.x[1];
      resultPosition = itemPositions.x[0];
   }
   return value ? resultPosition : initialPosition;
};
