import { Box, Typography } from "@mui/material";
import CardItem from "../../components/card-item";
import React from "react";
import { listTelevisores } from "../../sdk/televisores";
import ListaElementos from "../../components/lista-elementos";
import { listFake } from "../../sdk/fakeApi";


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
        <ListaElementos items={items} loading={loading} />
    )
}

export default SectionFake;