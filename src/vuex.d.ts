import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface State {
        allProducts: number,
        user: null | string
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}