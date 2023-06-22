export const listFake = () => {
    return fetch('https://fakestoreapi.com/products/');
}

export const getFake = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`);
}