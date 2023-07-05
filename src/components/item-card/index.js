import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count';

const Item = ({ data }) =>  {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt={data.title}
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={'/product/' + data.id}>
          {data.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <div>

        <ItemCount />
        </div>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
export default Item