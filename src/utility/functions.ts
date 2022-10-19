import TweenLite from "gsap";
import { Dispatch } from "react";
import { Rotations } from "../utility/constants";

export const chooseRotation = (number, direction) => {
  switch (number) {
    case 0:
      return direction === "negative"
        ? Rotations.negative0
        : Rotations.positive0;
    case 1:
      return direction === "negative"
        ? Rotations.negative1
        : Rotations.positive1;
    case 2:
      return direction === "negative"
        ? Rotations.negative2
        : Rotations.positive2;
    case 3:
      return direction === "negative"
        ? Rotations.negative3
        : Rotations.positive3;
    case 4:
      return direction === "negative"
        ? Rotations.negative4
        : Rotations.positive4;
    case 5:
      return direction === "negative"
        ? Rotations.negative5
        : Rotations.positive5;
    case 6:
      return direction === "negative"
        ? Rotations.negative6
        : Rotations.positive6;
    case 7:
      return direction === "negative"
        ? Rotations.negative7
        : Rotations.positive7;
    default:
      return;
  }
};
export const clickRotator = (
  wheelPosition: number,
  digit: number,
  item: HTMLUListElement,
  setDigitRotation: Dispatch<Rotations>,
) => {
  if (digit - wheelPosition === 1 || digit - wheelPosition === -5) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition, "positive"));
    return;
  }

  if (digit - wheelPosition === 2 || digit - wheelPosition === -4) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition + 1, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition + 1, "positive"));
    return;
  }

  if (digit - wheelPosition === 3 && wheelPosition === 1) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition + 2, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition + 2, "negative"));
    return;
  }

  if (digit - wheelPosition === 3 && wheelPosition === 2) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition, "negative"));
    return;
  }

  if (digit - wheelPosition === 3 && wheelPosition === 3) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 2, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 2, "negative"));
    return;
  }

  if (digit - wheelPosition === -3 && wheelPosition === 4) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition + 2, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition + 2, "negative"));
    return;
  }

  if (
    digit - wheelPosition === -3 &&
    (wheelPosition === 5 || wheelPosition === 6)
  ) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 4, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 4, "positive"));
    return;
  }

  if (digit - wheelPosition === 4 && wheelPosition === 1) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition + 1, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition + 1, "negative"));
    return;
  }

  if (digit - wheelPosition === 4 && wheelPosition === 2) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 1, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 1, "negative"));
    return;
  }

  if (digit - wheelPosition === -2 && wheelPosition === 3) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 3, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 3, "negative"));
    return;
  }

  if (digit - wheelPosition === -2 && wheelPosition === 4) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 3, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 3, "positive"));
    return;
  }

  if (
    digit - wheelPosition === -2 &&
    (wheelPosition === 5 || wheelPosition === 6)
  ) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 3, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 3, "positive"));
    return;
  }

  if (digit - wheelPosition === 5 && wheelPosition === 1) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition, "positive"),
    });
    setDigitRotation(chooseRotation(wheelPosition, "negative"));
    return;
  }

  if (digit - wheelPosition === -1) {
    TweenLite.to(item, 1, {
      rotation: chooseRotation(wheelPosition - 2, "negative"),
    });
    setDigitRotation(chooseRotation(wheelPosition - 2, "positive"));
    return;
  }
};
