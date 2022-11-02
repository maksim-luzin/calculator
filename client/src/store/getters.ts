import { ButtonNames } from "@/general/enums/buttonNames";
import { mathOperation } from "@/general/helpers";
import { IState } from "@/general/interfaces";
import { TMathOp } from "@/general/types";

const getters = {
  getCurrentValue({ currentValue, currentValuePosition }: IState) {
    return currentValue.slice(0, currentValuePosition);
  },
  getCurrentValuePosition({ currentValuePosition }: IState) {
    return currentValuePosition;
  },
  getCurrentValueLength({ currentValue }: IState) {
    return currentValue.length;
  },
  getCurrentCalculation(state: IState) {
    return (
      state.currentCalculation
        .slice(0, state.currentCalculationPosition)
        .join(" ") +
      " " +
      state.currentValue.slice(0, state.currentValuePosition)
    );
  },
  getLastCalculation({
    currentCalculation,
    currentCalculationPosition,
  }: IState) {
    return currentCalculation[currentCalculationPosition - 1] || "";
  },
  getComputedValue(state: IState) {
    const computedValue = state.currentCalculation
      .slice(0, state.currentCalculationPosition)
      .reduce(
        (acc, elem) => {
          if (isNaN(parseFloat(elem))) {
            return {
              ...acc,
              operation: elem as ButtonNames,
            };
          } else {
            return {
              ...acc,
              value: mathOperation[acc.operation as TMathOp](acc.value, elem),
            };
          }
        },
        {
          value: 0,
          operation: ButtonNames.Plus,
        }
      );

    const allComputedValue =
      Math.round(
        10000000 *
          mathOperation[computedValue.operation as TMathOp](
            computedValue.value,
            state.currentValue.slice(0, state.currentValuePosition)
          )
      ) / 10000000;

    if (Math.abs(allComputedValue) < 1e11) return allComputedValue;

    const lengthRound =
      String(Math.abs(Math.round(allComputedValue))).length - 1;

    return `${
      Math.round(allComputedValue / Math.pow(10, lengthRound - 3)) / 1000
    }e${lengthRound}`;
  },
  hasCurrentValueDot({ isCurrentValueDot }: IState) {
    return isCurrentValueDot;
  },
};

export { getters };
