import React, { Dispatch } from 'react';
import '../assets/scss/Pagination.scss';
import { chooseSlides, gsapRotator } from '../utility/functions';
import gsap from 'gsap';
import { ActionType } from '../utility/reducer';

type PropsType = {
   activePage: number;
   isWheelActive: boolean;
   dispatch: Dispatch<ActionType>;
   wheel: HTMLUListElement;
   isWheelRotatable: boolean;
};
const Pagination: React.FC<PropsType> = ({
   activePage,
   isWheelActive,
   dispatch,
   wheel,
   isWheelRotatable,
}) => {
   const nextPage = activePage === 6 ? 1 : activePage + 1;
   const prevPage = activePage === 1 ? 6 : activePage - 1;

   const handleActivePage = (currentPage: number, desirablePage: number) => {
      if (isWheelRotatable) {
         const slides = chooseSlides(desirablePage);
         dispatch({ type: `setItem${currentPage}Active`, payload: false });
         dispatch({ type: `setItem${desirablePage}Active`, payload: true });
         setTimeout(() => {
            dispatch({ type: 'setSlides', payload: slides });
         }, 200);
         dispatch({ type: 'setWheelPosition', payload: desirablePage });
         dispatch({ type: 'setWheelRotatable', payload: false });
         setTimeout(() => {
            dispatch({ type: 'setWheelRotatable', payload: true });
         }, 800);
         gsapRotator(currentPage, desirablePage, wheel, dispatch);
         gsap.to(`.description${currentPage}`, { opacity: 0, duration: 0.2 });
      }
   };

   return (
      <div className="pagination">
         <div className="pagination__pages">0{activePage}/06</div>
         <div
            className={
               isWheelActive
                  ? 'pagination__buttons'
                  : 'pagination__buttons pagination__buttons-inactive'
            }
         >
            <span onClick={() => handleActivePage(activePage, prevPage)}></span>
            <span onClick={() => handleActivePage(activePage, nextPage)}></span>
            <div className="pagination__mobile">
               <div
                  className={
                     activePage === 1
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 1)}
               ></div>
               <div
                  className={
                     activePage === 2
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 2)}
               ></div>
               <div
                  className={
                     activePage === 3
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 3)}
               ></div>
               <div
                  className={
                     activePage === 4
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 4)}
               ></div>
               <div
                  className={
                     activePage === 5
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 5)}
               ></div>
               <div
                  className={
                     activePage === 6
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => handleActivePage(activePage, 6)}
               ></div>
            </div>
         </div>
      </div>
   );
};

export default Pagination;
