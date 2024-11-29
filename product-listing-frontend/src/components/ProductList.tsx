import React from 'react';
import { Product } from '../types/Product';
import { Grid, Card, CardContent, Typography } from '@mui/material';

// Define the props for ProductList component
interface ProductListProps {
    products: Product[];
}

// Component to display a grid of products
const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        <CardContent>
                            <Typography variant="h6">{product.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {product.description}
                            </Typography>
                            <Typography variant="subtitle1">${product.price}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
