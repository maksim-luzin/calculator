import { ButtonNames } from "@/general/enums/buttonNames";

const hasDot = (value: string): boolean => {
  const digitValue = parseFloat(value);

  if (
    isNaN(digitValue) ||
    (Math.floor(digitValue) === digitValue &&
      value.slice(-1) !== ButtonNames.Dot)
  )
    return false;
  return true;
};

export { hasDot };
