import React, { Dispatch, useEffect, useRef, useState } from 'react';
import TweenMax from 'gsap';
import { Power3, gsap } from 'gsap';
import {
   calculatePosition,
   chooseSlides,
   deactivatePreviousItem,
   gsapRotator,
} from '../utility/functions';
import {
   item1Positions,
   item2Positions,
   item3Positions,
   item4Positions,
   item5Positions,
   item6Positions,
} from '../utility/constants';
import { ActionType, ItemState } from '../utility/reducer';

type PropsType = {
   digit: number;
   dispatch: Dispatch<ActionType>;
   wheel: HTMLUListElement;
   state: ItemState;
};
const AnimatedCircle: React.FC<PropsType> = ({
   digit,
   wheel,
   state,
   dispatch,
}) => {
   const item1 = useRef<HTMLLIElement>(null);
   const item1Digit = useRef<HTMLSpanElement>(null);

   const [isItemHovered, setItemHovered] = useState<boolean>(false);

   let position;
   let isItemActive;
   let itemPositions;
   let description;

   switch (digit) {
      case 1:
         isItemActive = state.isItem1Active;
         itemPositions = item1Positions;
         description = 'Космос';
         position = 'topRight';
         break;
      case 2:
         isItemActive = state.isItem2Active;
         itemPositions = item2Positions;
         description = 'Кино';
         position = 'topRight';
         break;
      case 3:
         isItemActive = state.isItem3Active;
         itemPositions = item3Positions;
         description = 'Литература';
         position = 'topRight';
         break;
      case 4:
         isItemActive = state.isItem4Active;
         itemPositions = item4Positions;
         description = 'Театр';
         position = 'topLeft';
         break;
      case 5:
         isItemActive = state.isItem5Active;
         itemPositions = item5Positions;
         description = 'Игры';
         position = 'topLeft';
         break;
      case 6:
         isItemActive = state.isItem6Active;
         itemPositions = item6Positions;
         description = 'Наука';
         position = 'topLeft';
         break;
   }

   useEffect(() => {
      if (state.digitRotation) {
         gsap.to(item1Digit.current, {
            rotation: state.digitRotation,
         });
         dispatch({
            type: 'setDigitRotation',
            payload: null,
         });
      }
   }, [state.digitRotation]);

   useEffect(() => {
      if (!isItemActive) hoverHandler(false);
      if (isItemActive) hoverHandler(true);
   }, [isItemActive]);

   const hoverHandler = (value) => {
      TweenMax.to(item1.current, 0.3, {
         width: value ? 56 : 6,
         height: value ? 56 : 6,
         top: calculatePosition(value, 'y', itemPositions),
         right:
            position === 'topRight' &&
            calculatePosition(value, 'x', itemPositions),
         left:
            position === 'topLeft' &&
            calculatePosition(value, 'x', itemPositions),
         background: value ? '#E5E5E5' : '#42567A',
         border: value ? '1px solid rgba(48, 62, 88, 0.5)' : 'none',
         ease: Power3.easeOut,
      });
      setItemHovered(value);
   };

   const clickHandler = () => {
      if (state.wheelPosition !== digit && state.isWheelRotatable) {
         const slides = chooseSlides(digit);
         dispatch({ type: `setItem${digit}Active`, payload: true });
         setTimeout(() => {
            dispatch({ type: 'setSlides', payload: slides });
         }, 200);
         deactivatePreviousItem(state.wheelPosition, dispatch);
         dispatch({ type: 'setWheelPosition', payload: digit });
         dispatch({ type: 'setWheelRotatable', payload: false });
         setTimeout(() => {
            dispatch({ type: 'setWheelRotatable', payload: true });
         }, 800);
         gsapRotator(state.wheelPosition, digit, wheel, dispatch);
      }
   };

   const mouseEnterHandler = () => {
      hoverHandler(true);
   };

   const mouseLeaveHandler = () => {
      if (!isItemActive) hoverHandler(false);
   };

   return (
      <>
         <li
            className={`carousel-item carousel-item${digit}`}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={clickHandler}
            ref={item1}
         ></li>

         <span
            className="digit"
            style={
               position === 'topRight'
                  ? { top: itemPositions.y[0], right: itemPositions.x[0] }
                  : { top: itemPositions.y[0], left: itemPositions.x[0] + 1 }
            }
            ref={item1Digit}
         >
            <span className={isItemHovered ? '' : 'digit-invisible'}>
               {digit}
            </span>
            <span className={`description description${digit}`}>
               {description}
            </span>
         </span>
      </>
   );
};

export default AnimatedCircle;
