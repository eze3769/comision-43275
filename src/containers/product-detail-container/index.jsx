import React from 'react'
import { getProduct } from '../../sdk/products';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/product-detail';


const ProductDetailsContainer = ({image, title, description, price}) => {
  const [data, setData] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    getProduct(id)
    .then((res) => res.json())
    .then((res) => setData(res));
    
  }, [id])
  console.log(data);
  return (
    <div>
      <ProductDetail data={data} />
    </div>
  )
}

export default ProductDetailsContainer;