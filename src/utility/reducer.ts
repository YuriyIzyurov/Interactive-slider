import { Cosmos, CosmosSlides, Rotations, slideInfoType } from './constants';

export type ItemState = {
   isItem1Active: boolean;
   isItem2Active: boolean;
   isItem3Active: boolean;
   isItem4Active: boolean;
   isItem5Active: boolean;
   isItem6Active: boolean;
   wheelPosition: number;
   digitRotation: Rotations | null;
   isWheelRotatable: boolean;
   currentDate1: number;
   currentDate2: number;
   activePage: number;
   currentSlides: slideInfoType;
};
export type ActionType = {
   type: string;
   payload: any;
};

export const reducer = (state: ItemState, action: ActionType) => {
   switch (action.type) {
      case 'setItem1Active':
         return { ...state, isItem1Active: action.payload };
      case 'setItem2Active':
         return { ...state, isItem2Active: action.payload };
      case 'setItem3Active':
         return { ...state, isItem3Active: action.payload };
      case 'setItem4Active':
         return { ...state, isItem4Active: action.payload };
      case 'setItem5Active':
         return { ...state, isItem5Active: action.payload };
      case 'setItem6Active':
         return { ...state, isItem6Active: action.payload };
      case 'setWheelPosition':
         return { ...state, wheelPosition: action.payload };
      case 'setDigitRotation':
         return { ...state, digitRotation: action.payload };
      case 'setWheelRotatable':
         return { ...state, isWheelRotatable: action.payload };
      case 'setCurrentDate1':
         return { ...state, currentDate1: action.payload };
      case 'setCurrentDate2':
         return { ...state, currentDate2: action.payload };
      case 'setActivePage':
         return { ...state, activePage: action.payload };
      case 'setSlides':
         return { ...state, currentSlides: action.payload };
      default:
         return state;
   }
};
export const initialState: ItemState = {
   isItem1Active: true,
   isItem2Active: false,
   isItem3Active: false,
   isItem4Active: false,
   isItem5Active: false,
   isItem6Active: false,
   wheelPosition: 1,
   digitRotation: null,
   isWheelRotatable: true,
   currentDate1: Cosmos[0],
   currentDate2: Cosmos[1],
   activePage: 1,
   currentSlides: {
      activePage: 1,
      title: 'Космос',
      dates: Cosmos,
      slides: CosmosSlides,
   },
};
