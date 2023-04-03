import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [createRow('Paperclips (Box)', 100, 1.15), createRow('Paper (Case)', 10, 45.99), createRow('Waste Basket', 2, 17.99)];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography variant="h2" component="h2">
                Quản lí thu chi tháng 4
            </Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    views={['year', 'month']}
                    label="Chọn tháng"
                    // value={value}
                    // onChange={setValue}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                    sx={{ marginTop: 3 }}
                />
            </LocalizationProvider>
            <br />
            <Button
                onClick={() => navigate('/money/edit/4')}
                color="secondary"
                variant="contained"
                endIcon={<EditIcon />}
                sx={{ width: 130, mb: 2, mt: 2 }}
            >
                Chỉnh sửa
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Chi tiết chi tiêu tháng 4
                            </TableCell>
                            <TableCell align="right">Tổng tiền</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Desc</TableCell>
                            <TableCell align="right">Số lượng</TableCell>
                            <TableCell align="right">Đơn vị</TableCell>
                            <TableCell align="right">Tổng</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Tổng</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phí</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Tổng tiền</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
