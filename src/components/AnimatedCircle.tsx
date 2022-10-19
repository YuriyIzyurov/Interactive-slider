import React, { Dispatch, useEffect, useRef, useState } from "react";
import TweenMax from "gsap";
import TweenLite, { Power3 } from "gsap";
import { clickRotator } from "../utility/functions";
import { itemPositionsType, Rotations } from "../utility/constants";

type PropsType = {
  item1Positions: itemPositionsType;
  digit: number;
  isItemActive: boolean;
  setItemActive: Dispatch<boolean>;
  wheelPosition: number;
  setWheelPosition: Dispatch<number>;
  wheel: React.MutableRefObject<HTMLUListElement>;
  setDigitRotation: Dispatch<Rotations>;
  digitRotation: Rotations | null;
  deactivePreviousItem: (number) => void;
  description: string;
};
const AnimatedCircle: React.FC<PropsType> = ({
  item1Positions,
  digit,
  isItemActive,
  setItemActive,
  wheelPosition,
  setWheelPosition,
  wheel,
  setDigitRotation,
  digitRotation,
  deactivePreviousItem,
  description,
}) => {
  const item1 = useRef<HTMLLIElement>(null);
  const item1Digit = useRef<HTMLSpanElement>(null);

  const [isItemHovered, setItemHovered] = useState<boolean>(false);

  let position;

  switch (digit) {
    case 1:
    case 2:
    case 3:
      position = "topRight";
      break;
    case 4:
    case 5:
    case 6:
      position = "topLeft";
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
    rotateDigit(digitRotation);
  }, [digitRotation]);

  useEffect(() => {
    if (!isItemActive) hoverHandler(false);
    if (isItemActive) hoverHandler(true);
  }, [isItemActive]);

  const calculatePosition = (value, axis) => {
    let initialPosition;
    let resultPosition;
    if (axis === "y") {
      initialPosition = item1Positions.y[1];
      resultPosition = item1Positions.y[0];
    } else {
      initialPosition = item1Positions.x[1];
      resultPosition = item1Positions.x[0];
    }
    return value ? resultPosition : initialPosition;
  };

  const hoverHandler = (value) => {
    TweenMax.to(item1.current, 0.3, {
      width: value ? 56 : 6,
      height: value ? 56 : 6,
      top: calculatePosition(value, "y"),
      right: position === "topRight" && calculatePosition(value, "x"),
      left: position === "topLeft" && calculatePosition(value, "x"),
      background: value ? "#E5E5E5" : "#42567A",
      border: value ? "1px solid rgba(48, 62, 88, 0.5)" : "none",
      ease: Power3.easeOut,
    });
    setItemHovered(value);
  };

  const clickHandler = () => {
    if (wheelPosition !== digit) {
      setItemActive(true);
      deactivePreviousItem(wheelPosition);
      setWheelPosition(digit);
      clickRotator(wheelPosition, digit, wheel.current, setDigitRotation);
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
          position === "topRight"
            ? { top: item1Positions.y[0], right: item1Positions.x[0] }
            : { top: item1Positions.y[0], left: item1Positions.x[0] + 1 }
        }
        ref={item1Digit}
      >
        <span className={isItemHovered ? "" : "digit-invisible"}>{digit}</span>
        <span className={`description description${digit}`}>{description}</span>
      </span>
    </>
  );
};

export default AnimatedCircle;
