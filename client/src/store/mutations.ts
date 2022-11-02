import { ButtonNames } from "@/general/enums/buttonNames";
import { MutationTypes } from "@/general/enums";
import { MaxDigitCapacity } from "@/general/const";
import { IState } from "@/general/interfaces";
import { hasDot } from "@/general/helpers";

const mutations = {
  [MutationTypes.AddNewDigit](state: IState, newDigit: string) {
    if (state.currentValue.length < MaxDigitCapacity) {
      if (
        newDigit !== ButtonNames.Null ||
        state.currentValue !== ButtonNames.Null
      ) {
        state.currentValue =
          state.currentValue.slice(0, state.currentValuePosition) + newDigit;
      }
      state.currentValuePosition = state.currentValue.length;
      state.currentCalculation = state.currentCalculation.slice(
        0,
        state.currentCalculationPosition
      );
    }
  },
  [MutationTypes.DeleteDigit](state: IState) {
    state.currentValue = state.currentValue.slice(0, -1);
    state.currentValuePosition -= 1;
  },
  [MutationTypes.DeleteAllDigits](state: IState) {
    state.currentValue = "";
    state.currentValuePosition = 0;
  },
  [MutationTypes.AddNewRecord](state: IState, newRecord: string) {
    if (state.currentValue) {
      state.currentCalculation = [
        ...state.currentCalculation.slice(0, state.currentCalculationPosition),
        String(Number(state.currentValue.slice(0, state.currentValuePosition))),
      ];
    } else {
      state.currentCalculation = state.currentCalculation.slice(
        0,
        state.currentCalculationPosition - 1
      );
    }
    state.currentCalculation.push(newRecord);
    state.currentValuePosition = 0;
    state.currentCalculationPosition = state.currentCalculation.length;
    state.isCurrentValueDot = false;
  },
  [MutationTypes.DeleteLastRecord](state: IState) {
    state.currentCalculation.pop();
    state.currentCalculationPosition -= 1;
  },
  [MutationTypes.DeleteAllRecords](state: IState) {
    state.currentCalculation = [];
    state.currentCalculationPosition = 0;
  },
  [MutationTypes.SetDigits](state: IState, value: string) {
    state.currentValue = value;
    state.currentValuePosition = state.currentValue.length;
    state.currentCalculation = state.currentCalculation.slice(
      0,
      state.currentCalculationPosition
    );
  },
  [MutationTypes.ChangeSign](state: IState) {
    const numberCurrentValue = parseFloat(
      state.currentValue.slice(0, state.currentValuePosition)
    );
    state.currentValue = String(
      -1 * (isNaN(numberCurrentValue) ? 0 : numberCurrentValue)
    );
    if (isNaN(numberCurrentValue) || !numberCurrentValue)
      state.isCurrentValueDot = false;
    if (Math.floor(numberCurrentValue) === numberCurrentValue)
      state.isCurrentValueDot = false;
    state.currentValuePosition = state.currentValue.length;
    state.currentValuePosition = state.currentValue.length;
    state.currentCalculation = state.currentCalculation.slice(
      0,
      state.currentCalculationPosition
    );
  },
  [MutationTypes.AddDot](state: IState) {
    state.isCurrentValueDot = true;
  },
  [MutationTypes.DeleteDot](state: IState) {
    state.isCurrentValueDot = false;
  },
  [MutationTypes.UndoRecord](state: IState) {
    state.currentCalculationPosition = Math.max(
      0,
      state.currentCalculationPosition - 2
    );
    const currentValue =
      state.currentCalculation[Math.max(0, state.currentCalculationPosition)];
    if (isNaN(parseFloat(currentValue))) {
      state.currentValue = "";
      state.currentValuePosition = 0;
    } else {
      state.currentValue = currentValue;
      state.currentValuePosition = currentValue.length;
      state.isCurrentValueDot = hasDot(state.currentValue);
    }
  },
  [MutationTypes.RedoRecord](state: IState) {
    state.currentCalculationPosition = Math.min(
      state.currentCalculation.length,
      state.currentCalculationPosition + 2
    );
    const currentValue =
      state.currentCalculation[state.currentCalculationPosition];
    if (isNaN(parseFloat(currentValue))) {
      state.currentValue = "";
      state.currentValuePosition = 0;
    } else {
      state.currentValue = currentValue;
      state.currentValuePosition = currentValue.length;
      state.isCurrentValueDot = hasDot(state.currentValue);
    }
  },
  [MutationTypes.UndoDigit](state: IState) {
    state.currentValuePosition = Math.max(0, state.currentValuePosition - 1);
    state.isCurrentValueDot = hasDot(
      state.currentValue.slice(0, state.currentValuePosition)
    );
  },
  [MutationTypes.RedoDigit](state: IState) {
    state.currentValuePosition = Math.min(
      state.currentValue.length,
      state.currentValuePosition + 1
    );
    state.isCurrentValueDot = hasDot(
      state.currentValue.slice(0, state.currentValuePosition)
    );
  },
};

export { mutations };
