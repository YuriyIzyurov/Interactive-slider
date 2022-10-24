import * as React from 'react';
import './../assets/scss/App.scss';
import { useEffect, useRef, useReducer } from 'react';
import AnimatedCircle from '../components/AnimatedCircle';
import Pagination from '../components/Pagination';
import { CalculateGsapEffect, setPageAndDates } from '../utility/functions';
import { Slider } from '../components/Slider';
import { initialState, reducer } from '../utility/reducer';

const App = () => {
   const wheel = useRef<HTMLUListElement>(null);
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      CalculateGsapEffect(window.innerWidth < 431);

      if (state.isItem1Active) {
         setPageAndDates(1, state.currentDate1, state.currentDate2, dispatch);
         return;
      }
      if (state.isItem2Active) {
         setPageAndDates(2, state.currentDate1, state.currentDate2, dispatch);
         return;
      }
      if (state.isItem3Active) {
         setPageAndDates(3, state.currentDate1, state.currentDate2, dispatch);
         return;
      }
      if (state.isItem4Active) {
         setPageAndDates(4, state.currentDate1, state.currentDate2, dispatch);
         return;
      }
      if (state.isItem5Active) {
         setPageAndDates(5, state.currentDate1, state.currentDate2, dispatch);
         return;
      }
      if (state.isItem6Active) {
         setPageAndDates(6, state.currentDate1, state.currentDate2, dispatch);
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

   return (
      <div className="app">
         <div className="background">
            <div className="background__top"></div>
            <div className="background__top"></div>
            <div className="background__bottom"></div>
            <div className="background__bottom"></div>
            <div className="background__wheel"></div>
         </div>
         <div className="background-mobile"></div>
         <h1 className="title">Исторические даты</h1>
         <ul className="carousel" ref={wheel}>
            {Array.from({ length: 6 }).map((item, index) => (
               <AnimatedCircle
                  key={index}
                  digit={index + 1}
                  state={state}
                  dispatch={dispatch}
                  wheel={wheel.current}
               />
            ))}
         </ul>
         <div className="dates">
            <span>{state.currentDate1}</span>
            <span>{state.currentDate2}</span>
         </div>
         <Pagination
            activePage={state.activePage}
            isWheelActive={state.isWheelRotatable}
            dispatch={dispatch}
            wheel={wheel.current}
            isWheelRotatable={state.isWheelRotatable}
         />
         <Slider
            currentSlides={state.currentSlides}
            activePage={state.activePage}
         />
      </div>
   );
};

export default App;
