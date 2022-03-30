import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { productRows } from 'data';
import { useState } from 'react';

const Products = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
              <img src={params.row.img} alt="" className="productListImg" />
              {params.row.name}
          </div>
        )
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 160,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: true,
      width: 160,
    },
    {
      field: 'price',
      headerName: 'Price',
      editable: true,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      editable: true,
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.row.id}`}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className='productList'>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          disableSelectionOnClick
          checkboxSelection
        />
    </div>
  )
}

export default Products