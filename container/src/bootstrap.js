import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartIndex';

console.log("container")

productMount(document.querySelector('#container-dev-products'))
cartMount(document.querySelector('#container-random-number'))
