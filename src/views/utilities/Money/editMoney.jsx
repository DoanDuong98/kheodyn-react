import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function EditMoney() {
    const [dataForm, setDataForm] = React.useState([]);
    const handleChangeInput = (id, key, value) => {
        const newData = [...dataForm];
        const findIndex = newData.findIndex((x) => x.id == id);
        if (findIndex > -1) newData[findIndex][key] = value;
        setDataForm(newData);
    };
    const handleAddItem = () => setDataForm([...dataForm, { id: new Date().getTime(), name: '', unit: '', total: 0 }]);

    const handleRemoveCategory = (id) => {
        const newList = [...dataForm].filter((item) => item.id !== id);
        setDataForm([...newList]);
    };
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '80%' }
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h2" component="h2">
                Chỉnh sửa quản lí thu chi tháng 4
            </Typography>
            <Button
                onClick={handleAddItem}
                color="secondary"
                variant="contained"
                endIcon={<AddIcon />}
                sx={{ width: '130px !important', mb: 2, mt: 2 }}
            >
                Thêm mục
            </Button>
            {dataForm?.map((item, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& .MuiTextField-root': { marginRight: 2, width: '100%' }
                    }}
                >
                    <TextField
                        required
                        id="outlined-basic"
                        label="Mục"
                        variant="outlined"
                        value={item.name}
                        onChange={(e) => handleChangeInput(item.id, 'name', e.target.value)}
                    />
                    <TextField
                        value={item.unit}
                        onChange={(e) => handleChangeInput(item.id, 'unit', e.target.value)}
                        required
                        id="outlined-basic"
                        label="Đơn giá"
                        variant="outlined"
                        type="number"
                    />
                    <TextField
                        value={item.total}
                        onChange={(e) => handleChangeInput(item.id, 'total', e.target.value)}
                        required
                        id="outlined-basic"
                        label="Tiền"
                        variant="outlined"
                        type="number"
                    />
                    <RemoveCircleIcon onClick={() => handleRemoveCategory(item.id)} color="secondary" sx={{ mb: 0, cursor: 'pointer' }} />
                </Box>
            ))}
            {!!dataForm?.length && (
                <Button
                    color="secondary"
                    variant="contained"
                    sx={{ textAlign: 'center', width: '130px !important', mb: 2, mt: 2, marginLeft: 'auto' }}
                >
                    Chỉnh sửa
                </Button>
            )}
        </Box>
    );
}
