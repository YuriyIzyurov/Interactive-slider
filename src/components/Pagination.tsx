import React from 'react';
import '../assets/scss/Pagination.scss';

type PropsType = {
   setActivePage: (number, string) => void;
   activePage: number;
};
const Pagination: React.FC<PropsType> = ({ setActivePage, activePage }) => {
   const nextPage = activePage === 6 ? 1 : activePage + 1;
   const prevPage = activePage === 1 ? 6 : activePage - 1;
   return (
      <div className="pagination">
         <div className="pagination__pages">0{activePage}/06</div>
         <div className="pagination__buttons">
            <span
               onClick={() => setActivePage(activePage, prevPage)}
            ></span>
            <span
               onClick={() => setActivePage(activePage, nextPage)}
            ></span>
            <div className="pagination__mobile">
               <div
                  className={
                     activePage === 1
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 1)}
               ></div>
               <div
                  className={
                     activePage === 2
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 2)}
               ></div>
               <div
                  className={
                     activePage === 3
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 3)}
               ></div>
               <div
                  className={
                     activePage === 4
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 4)}
               ></div>
               <div
                  className={
                     activePage === 5
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 5)}
               ></div>
               <div
                  className={
                     activePage === 6
                        ? 'pagination__mobile-circle activePage'
                        : 'pagination__mobile-circle'
                  }
                  onClick={() => setActivePage(activePage, 6)}
               ></div>
            </div>
         </div>
      </div>
   );
};

export default Pagination;
