import { state } from "./state";
import { mutations } from "./mutations";
import { getters } from "./getters";

const currentValueModule = {
  state,
  getters,
  mutations,
  namespaced: true,
};

export { currentValueModule };
