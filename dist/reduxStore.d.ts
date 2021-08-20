interface Product {
    name: string;
    image: string;
    price: number;
    description: string;
}
interface ProductState {
    readonly items: Product[];
}
declare const reduxStore: import("redux").Store<ProductState, import("redux").AnyAction>;
export default reduxStore;
