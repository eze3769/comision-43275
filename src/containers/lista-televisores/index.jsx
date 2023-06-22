import { Box, Typography } from "@mui/material";
import CardItem from "../../components/card-item";
import React from "react";
import { listTelevisores } from "../../sdk/televisores";


const SectionTelevisores = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        listTelevisores()
        .then((respuesta) => {
          console.log(respuesta)
          return respuesta.json()})
        .then((respuesta) => {
            console.log(respuesta);
            setItem(respuesta)
        })
        .catch((err) => {
          console.error(err)
          alert('error al cargar televisores');
          setLoading(false)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    console.log(items);
    
    return (
        <Box display={'flex'} justifyContent={'start'} flexDirection={'row'} gap={5}>
            {
                loading ?
                   <Typography>cargando...</Typography>
                :
                items?.map((item, index) => {
                    return (
                        <CardItem key={index + item.nombre} name={item.nombre} price={item.precio} stock={item.cantidad} imageURL={item.imageURL} />
                    )
                })
            }
        </Box>
    )
}

export default SectionTelevisores;