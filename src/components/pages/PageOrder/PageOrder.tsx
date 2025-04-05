import React from 'react';
import { Order } from '~/models/Order';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PaperLayout from '~/components/PaperLayout/PaperLayout';
import Typography from '@mui/material/Typography';
import API_PATHS from '~/constants/apiPaths';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from 'react-query';

export default function PageOrder() {
  const { id } = useParams<{ id: string }>();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery<Order, Error>(['order', { id }], async () => {
    const token = localStorage.getItem('authorization_token');
    const res = await axios.get<Order>(`${API_PATHS.order}/orders/${id}`, {
      headers: token ? { Authorization: `Basic ${token}` } : undefined,
    });
    return res.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading order: {error.message}</p>;

  return order ? (
    <PaperLayout>
      <Typography component="h1" variant="h4" align="center">
        Order Details
      </Typography>
      <TableContainer>
        <Table aria-label="order details table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                {order.delivery?.address?.firstName || '-'}{' '}
                {order.delivery?.address?.lastName || '-'}
              </TableCell>
              <TableCell>{order.delivery?.address?.address || '-'}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>{order.delivery?.address?.comment || '-'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </PaperLayout>
  ) : null;
}
