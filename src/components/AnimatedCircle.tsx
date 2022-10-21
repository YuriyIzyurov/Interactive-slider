import React, { Dispatch, useEffect, useRef, useState } from 'react';
import TweenMax from 'gsap';
import TweenLite, { Power3 } from 'gsap';
import { calculatePosition, clickRotator } from '../utility/functions';
import {
   item1Positions,
   item2Positions,
   item3Positions,
   item4Positions,
   item5Positions,
   item6Positions,
   itemPositionsType,
   Rotations,
} from '../utility/constants';
import { ActionType, ItemState } from '../utility/reducer';

type PropsType = {
   digit: number;
   dispatch: Dispatch<ActionType>;
   wheel: React.MutableRefObject<HTMLUListElement>;
   deactivePreviousItem: (number) => void;
   state: ItemState;
};
const AnimatedCircle: React.FC<PropsType> = ({
   digit,
   wheel,
   deactivePreviousItem,
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
         break;
      case 2:
         isItemActive = state.isItem2Active;
         itemPositions = item2Positions;
         description = 'Кино';
         break;
      case 3:
         isItemActive = state.isItem3Active;
         itemPositions = item3Positions;
         description = 'Литература';
         break;
      case 4:
         isItemActive = state.isItem4Active;
         itemPositions = item4Positions;
         description = 'Театр';
         break;
      case 5:
         isItemActive = state.isItem5Active;
         itemPositions = item5Positions;
         description = 'Игры';
         break;
      case 6:
         isItemActive = state.isItem6Active;
         itemPositions = item6Positions;
         description = 'Наука';
         break;
   }

   switch (digit) {
      case 1:
      case 2:
      case 3:
         position = 'topRight';
         break;
      case 4:
      case 5:
      case 6:
         position = 'topLeft';
         break;
   }

   const rotateDigit = (digitRotation) => {
      if (digitRotation || digitRotation === 0) {
         TweenLite.to(item1Digit.current, 1, {
            rotation: digitRotation,
         });
      }
   };

   useEffect(() => {
      rotateDigit(state.digitRotation);
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
      if (state.wheelPosition !== digit) {
         dispatch({ type: `setItem${digit}Active`, payload: true });
         deactivePreviousItem(state.wheelPosition);
         dispatch({ type: 'setWheelPosition', payload: digit });
         clickRotator(state.wheelPosition, digit, wheel.current, dispatch);
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
