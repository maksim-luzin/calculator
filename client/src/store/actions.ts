import { ActionContext } from "vuex";
import { ActionTypes, MutationTypes, ButtonNames } from "@/general/enums";
import { IState, IActionAddNewRecord } from "@/general/interfaces";
import { httpService } from "@/general/services";

type TContext = ActionContext<IState, IState>;

const actions = {
  async [ActionTypes.AddNewRecord](
    store: TContext,
    { newDigit }: IActionAddNewRecord
  ) {
    if (newDigit === ButtonNames.Equals) {
      await httpService.createRecord(store.state.currentCalculation);
    }
    store.commit(MutationTypes.AddNewRecord, newDigit);
  },
};

export { actions };
