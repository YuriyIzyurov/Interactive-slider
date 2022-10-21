import { Rotations } from './constants';

export type ItemState = {
   isItem1Active: boolean;
   isItem2Active: boolean;
   isItem3Active: boolean;
   isItem4Active: boolean;
   isItem5Active: boolean;
   isItem6Active: boolean;
   wheelPosition: number;
   digitRotation: Rotations | null;
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
};
