import { ActionTypes } from "@/general/enums";

interface IActionAddNewRecord {
  key: ActionTypes;
  newDigit: string;
}

export { IActionAddNewRecord };
