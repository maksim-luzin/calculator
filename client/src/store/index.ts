import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { IState } from "@/general/interfaces";

const key: InjectionKey<Store<IState>> = Symbol();

const store = createStore<IState>({
  state,
  getters,
  actions,
  mutations,
});

const useStore = () => baseUseStore(key);
export { store, useStore, key };
