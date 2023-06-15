import { Box, Typography } from "@mui/material";
import CardItem from "../../../components/card-item";
import { getTvs } from "./products";
import React from "react";


const SectionTelevisores = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        getTvs()
        .then((respuesta) => {
            console.log(respuesta);
            setItem(respuesta)
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