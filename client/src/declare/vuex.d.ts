import { Store } from "vuex";
import { IState } from "@/general/interfaces";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
