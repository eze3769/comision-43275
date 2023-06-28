
import React from "react";
import ListaElementos from "../../components/lista-elementos";
import { listFake } from "../../sdk/fakeApi";
import Container from "../../components/container";


const SectionFake = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        listFake()
        .then((respuesta) => {
          console.log(respuesta)
          return respuesta.json()})
        .then((respuesta) => {
            console.log(respuesta);
            setItem(respuesta)
        })
        .catch((err) => {
          console.error(err)
          alert('error al cargar');
          setLoading(false)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    console.log(items);
    
    return (
        <Container>
            <ListaElementos items={items} loading={loading} />
        </Container>
    )
}

export default SectionFake;