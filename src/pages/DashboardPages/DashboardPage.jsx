import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';

const statCards = [
  {
    title: 'Total Users',
    value: '9',
    subtitle: 'Registered accounts',
  },
  {
    title: 'Average Age',
    value: '47.8',
    subtitle: 'User age average',
  },
  {
    title: 'Total Reports',
    value: '12',
    subtitle: 'Monthly reports',
  },
  {
    title: 'Active Users',
    value: '6',
    subtitle: 'Currently active',
  },
];

const rows = [
  {
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    age: 14,
  },
  {
    id: 2,
    firstName: 'Cersei',
    lastName: 'Lannister',
    age: 31,
  },
  {
    id: 3,
    firstName: 'Jaime',
    lastName: 'Lannister',
    age: 31,
  },
  {
    id: 4,
    firstName: 'Arya',
    lastName: 'Stark',
    age: 11,
  },
  {
    id: 5,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    age: null,
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
    width: 160,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 160,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (value, row) =>
      `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const cardStyle = {
  border: '2px solid #111827',
  borderRadius: '22px',
  boxShadow: '5px 5px 0px #236192',
};

const DashboardPage = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Dashboard
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Overview and summary of the admin dashboard.
          </Typography>
        </Box>

        <Chip
          label="MUI Dashboard"
          sx={{
            bgcolor: '#236192',
            color: '#ffffff',
            fontWeight: 800,
            border: '2px solid #111827',
          }}
        />
      </Stack>

      <Grid container spacing={3}>
        {statCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" color="text.secondary">
                  {card.title}
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: 900, mt: 1 }}>
                  {card.value}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {card.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={8}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                Quarterly Users
              </Typography>

              <BarChart
                height={320}
                xAxis={[
                  {
                    scaleType: 'band',
                    data: ['Q1', 'Q2', 'Q3', 'Q4'],
                  },
                ]}
                series={[
                  {
                    data: [35, 44, 24, 34],
                    label: 'Series 1',
                  },
                  {
                    data: [51, 6, 49, 30],
                    label: 'Series 2',
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                User Distribution
              </Typography>

              <PieChart
                height={320}
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: 10,
                        label: 'Students',
                      },
                      {
                        id: 1,
                        value: 15,
                        label: 'Admins',
                      },
                      {
                        id: 2,
                        value: 20,
                        label: 'Guests',
                      },
                    ],
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ ...cardStyle, mt: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
            Users Overview
          </Typography>

          <Box sx={{ height: 380, width: '100%' }}>
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
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardPage;