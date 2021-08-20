import { createStore, Reducer } from "redux";

interface Product {
  name: string;
    image: string;
    price: number;
    description: string
}

interface ProductState {
  readonly items: Product[]
}

const INITIAL_STATE = {
  items: [] as Product[],
};

const product: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

const reduxStore = createStore(product);

export default reduxStore;
