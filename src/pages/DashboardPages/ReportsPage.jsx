import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const cardStyle = {
  border: '2px solid #111827',
  borderRadius: '22px',
  boxShadow: '5px 5px 0px #236192',
};

const ReportsPage = () => {
  return (
    <Box>
      <Stack sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Reports
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Charts and data visualization using MUI X Charts.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                Monthly Sales Report
              </Typography>

              <BarChart
                height={350}
                xAxis={[
                  {
                    scaleType: 'band',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  },
                ]}
                series={[
                  {
                    data: [120, 150, 180, 140, 210, 250],
                    label: 'Sales',
                  },
                  {
                    data: [80, 100, 130, 120, 160, 190],
                    label: 'Orders',
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
                Product Categories
              </Typography>

              <PieChart
                height={350}
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: 35,
                        label: 'Uniforms',
                      },
                      {
                        id: 1,
                        value: 25,
                        label: 'Accessories',
                      },
                      {
                        id: 2,
                        value: 20,
                        label: 'Supplies',
                      },
                      {
                        id: 3,
                        value: 20,
                        label: 'Others',
                      },
                    ],
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                Website Visitors
              </Typography>

              <LineChart
                height={350}
                xAxis={[
                  {
                    data: [1, 2, 3, 4, 5, 6, 7],
                    label: 'Day',
                  },
                ]}
                series={[
                  {
                    data: [20, 35, 30, 50, 45, 70, 90],
                    label: 'Visitors',
                  },
                  {
                    data: [10, 20, 25, 30, 40, 55, 65],
                    label: 'Buyers',
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;