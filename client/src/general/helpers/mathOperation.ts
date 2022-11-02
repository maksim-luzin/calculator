import { ButtonNames } from "../enums";

const mathOperation = {
  [ButtonNames.Divide](dividend: number, divider = "1") {
    return (
      dividend / parseFloat(divider && parseFloat(divider) ? divider : "1")
    );
  },
  [ButtonNames.Multiply](multiplier1: number, multiplier2 = "1") {
    return multiplier1 * parseFloat(multiplier2 ? multiplier2 : "1");
  },
  [ButtonNames.Minus](minuend: number, subtrahend = "0") {
    return minuend - parseFloat(subtrahend ? subtrahend : "0");
  },
  [ButtonNames.Plus](term1: number, term2 = "0") {
    return term1 + parseFloat(term2 ? term2 : "0");
  },
  [ButtonNames.Equals](term1: number, term2 = "0") {
    return term1 + parseFloat(term2 ? term2 : "0");
  },
};

export { mathOperation };
