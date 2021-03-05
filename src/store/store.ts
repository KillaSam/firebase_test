import { createStore } from 'vuex';
import user from './user';
import products from './products';

export default createStore({
    modules: {
        user,
        products
    }
})