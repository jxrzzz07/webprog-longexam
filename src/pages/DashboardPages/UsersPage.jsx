import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    age: 14,
    email: 'jon.snow@email.com',
    role: 'Student',
    status: 'Active',
  },
  {
    id: 2,
    firstName: 'Cersei',
    lastName: 'Lannister',
    age: 31,
    email: 'cersei@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 3,
    firstName: 'Jaime',
    lastName: 'Lannister',
    age: 31,
    email: 'jaime@email.com',
    role: 'Staff',
    status: 'Inactive',
  },
  {
    id: 4,
    firstName: 'Arya',
    lastName: 'Stark',
    age: 11,
    email: 'arya@email.com',
    role: 'Student',
    status: 'Active',
  },
  {
    id: 5,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    age: 22,
    email: 'daenerys@email.com',
    role: 'Student',
    status: 'Active',
  },
  {
    id: 6,
    firstName: 'Melisandre',
    lastName: 'Red',
    age: 150,
    email: 'melisandre@email.com',
    role: 'Staff',
    status: 'Inactive',
  },
  {
    id: 7,
    firstName: 'Ferrara',
    lastName: 'Clifford',
    age: 44,
    email: 'ferrara@email.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 8,
    firstName: 'Rossini',
    lastName: 'Frances',
    age: 36,
    email: 'rossini@email.com',
    role: 'Student',
    status: 'Active',
  },
  {
    id: 9,
    firstName: 'Harvey',
    lastName: 'Roxie',
    age: 65,
    email: 'harvey@email.com',
    role: 'Staff',
    status: 'Inactive',
  },
];

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    minWidth: 220,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 140,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        sx={{
          fontWeight: 800,
          bgcolor: params.value === 'Active' ? '#236192' : '#71717a',
          color: '#ffffff',
        }}
      />
    ),
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    flex: 1,
    minWidth: 200,
    valueGetter: (value, row) =>
      `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const UsersPage = () => {
  return (
    <Box>
      <Stack sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Users
        </Typography>

        <Typography variant="body2" color="text.secondary">
          User list and table details using MUI X Data Grid.
        </Typography>
      </Stack>

      <Card
        sx={{
          border: '2px solid #111827',
          borderRadius: '22px',
          boxShadow: '5px 5px 0px #236192',
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
            User Details
          </Typography>

          <Box sx={{ height: 520, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsersPage;