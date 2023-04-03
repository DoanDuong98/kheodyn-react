import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from 'ui-component/products';
// mock
import PRODUCTS from '_mock/products';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function ProductsPage() {
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>
            <Helmet>
                <title> Dashboard: Products | KHEO-DYN </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Sảm phẩm
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
                    <Button color="secondary" variant="contained" endIcon={<AddIcon />} onClick={() => navigate('/products/create')}>
                        Thêm mới sản phẩm
                    </Button>
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <ProductFilterSidebar
                            bar
                            openFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        <ProductSort />
                    </Stack>
                </Stack>
                <ProductList products={PRODUCTS} onClick={() => navigate('/products/1')}></ProductList>
                <ProductCartWidget />
            </Container>
        </>
    );
}
