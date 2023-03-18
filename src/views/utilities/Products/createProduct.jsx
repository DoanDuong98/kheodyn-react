import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Button, IconButton, Box, TextField, Autocomplete } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const top100Films = [
    { title: 'DYI', year: 1994 },
    { title: 'Thành phẩm', year: 1972 },
    { title: 'Hoa', year: 1974 },
    { title: 'Thú', year: 2008 },
    { title: 'Gương', year: 1957 },
    { title: 'Khác', year: 1993 }
];

const CreateProduct = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard: Create Product | KHEO-DYN </title>
            </Helmet>
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Tạo mới sảm phẩm
                </Typography>
                <Stack
                    sx={{
                        border: '1px solid #ffff',
                        p: 3,
                        backgroundColor: '#ffff',
                        borderRadius: 1,
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                    }}
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="flex-end"
                    justifyContent="space-between"
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: 300,
                            height: 300,
                            boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                            borderRadius: 1
                        }}
                    >
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera sx={{ fontSize: 42 }} />
                        </IconButton>
                    </Stack>
                    <Stack
                        sx={{
                            width: '60%'
                        }}
                    >
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mb: 4, width: '100%' }
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField required id="name" label="Tên sản phẩm" defaultValue="Hoa hướng dương" />
                            <TextField required id="quantity" label="Số lượng" type="number" defaultValue={10} />
                            <TextField required id="quantity" label="Số lượng sản phầm đã bán" type="number" defaultValue={2} />
                            <TextField
                                required
                                id="price"
                                label="Giá sản phẩm"
                                type="number"
                                defaultValue={299000}
                                helperText={`${'299000'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ`}
                            />
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[1]]}
                                filterSelectedOptions
                                renderInput={(params) => <TextField {...params} label="Phân loại sản phẩm" placeholder="Phân loại" />}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Ghi chú"
                                multiline
                                rows={5}
                                defaultValue="Ghi chú cho sản phẩm"
                            />
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Mô tả sản phẩm</p>"
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                        </Box>
                        <Button color="secondary" variant="contained" endIcon={<AddIcon />} sx={{ width: 200, marginLeft: 'auto', mt: 3 }}>
                            Thêm mới sản phẩm
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default CreateProduct;
