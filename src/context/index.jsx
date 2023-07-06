import React from 'react';

export const AppContext = React.createContext();
const { Provider } = AppContext;

const ContextProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);

    const addProductToCarrito = (product) => {
        setCarrito([...carrito, product]);
    }


    // return(
    //     <AppContext.Provider>
    //         {children}
    //     </AppContext.Provider>
    // )
    return (
        <Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length  }}>
            { children }
        </Provider>
    )
}

export default ContextProvider;