import React from 'react'
import TabsMenu from '../../components/tabs';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../sdk/products';
import ItemsList from '../../components/items-list';

const CATEGORIES = [{id: 'all', title: 'Todos los productos'}, {id: 'cel', title: 'Celulares'}, {id: 'remeras', title: 'Remeras'}]

const searchCategory = (id) => {
  switch (id) {
    case 'remeras':
      return 'remeras';
    case 'cel':
      return 'celulares';
    default:
      return 'ropa'
  }
}

const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();
  // const category = useParams().category;

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';


  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])

  React.useEffect(() => {
    setLoading(true);
    getProducts(searchCategory(category))
    .then(res => res.json())
    .then(res => {
      const data = res.results?.map((elemento) => ({
        id: elemento.id,
        title: elemento.title,
        price: elemento.price,
        image: elemento.thumbnail,
        stock: elemento.available_quantity
      }))
      setItems(data);
    })
    .finally(() => setLoading(false))
  }, [category])

  return (
    <div>
      <TabsMenu current={current} items={CATEGORIES} />
      <div style={{ padding: 50}}>
        <ItemsList items={items} loading={loading} />
      </div>
    </div>
  )
}

export default ItemContainer;