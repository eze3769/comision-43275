import React, { useContext } from 'react'
import { getProduct } from '../../sdk/products';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/product-detail';
import { AppContext } from '../../context';


const ProductDetailsContainer = ({image, title, description, price}) => {
  const [data, setData] = React.useState();
  const { id } = useParams();

  const { addProductToCarrito } = useContext(AppContext);

  React.useEffect(() => {
    getProduct(id)
    .then((res) => res.json())
    .then((res) => setData(res));
    
  }, [id])
  console.log(data);
  return (
    <div>
      <ProductDetail data={data} addToCarrito={addProductToCarrito} />
    </div>
  )
}

export default ProductDetailsContainer;