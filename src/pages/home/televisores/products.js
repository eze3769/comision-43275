const TVS = [{
    id: 1,
    nombre: 'tv1',
    imageURL: 'https://images.philips.com/is/image/philipsconsumer/9bf82d2f35814992a0b2afb701346516?$jpglarge$&wid=960',
    cantidad: 10,
    precio: 150000
},
{
    id: 2,
    nombre: 'tv2',
    imageURL: 'https://images.philips.com/is/image/philipsconsumer/9bf82d2f35814992a0b2afb701346516?$jpglarge$&wid=960',
    cantidad: 0,
    precio: 850000
},
{
    id: 3,
    nombre: 'tv3',
    imageURL: 'https://images.philips.com/is/image/philipsconsumer/9bf82d2f35814992a0b2afb701346516?$jpglarge$&wid=960',
    cantidad: 10,
    precio: 550000
},
{
    id: 4,
    nombre: 'tv4',
    imageURL: 'https://images.philips.com/is/image/philipsconsumer/9bf82d2f35814992a0b2afb701346516?$jpglarge$&wid=960',
    cantidad: 10,
    precio: 350000
}]


export const getTvs = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(TVS);
        }, 2000)
    })
}