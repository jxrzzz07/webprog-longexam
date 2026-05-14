import { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import { BarChart, PieChart, LineChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";

const reportRows = [
  { id: 1, firstName: "Jon", lastName: "Snow", age: 14 },
  { id: 2, firstName: "Cersei", lastName: "Lannister", age: 31 },
  { id: 3, firstName: "Jaime", lastName: "Lannister", age: 31 },
  { id: 4, firstName: "Arya", lastName: "Stark", age: 11 },
  { id: 5, firstName: "Daenerys", lastName: "Targaryen", age: 22 },
];

const reportColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 180,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const cardStyle = {
  border: "2px solid #111827",
  borderRadius: "22px",
  boxShadow: "5px 5px 0px #236192",
};

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) {
      return;
    }

    const printWindow = window.open("", "_blank", "width=1200,height=900");

    if (!printWindow) {
      return;
    }

    const styles = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reports Summary</title>
          ${styles}
          <style>
            @page {
              size: A4;
              margin: 14mm;
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #ffffff;
              color: #111827;
            }

            .report-sheet {
              padding: 20px;
            }

            .report-header {
              margin-bottom: 24px;
              padding-bottom: 14px;
              border-bottom: 2px solid #111827;
            }

            .report-header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 900;
            }

            .report-header p {
              margin-top: 8px;
              font-size: 14px;
              color: #4b5563;
              line-height: 1.5;
            }

            .MuiCard-root {
              box-shadow: none !important;
              border: 1px solid #e5e7eb !important;
              page-break-inside: avoid;
            }

            .MuiCardContent-root {
              padding: 20px !important;
            }

            svg {
              max-width: 100%;
            }
          </style>
        </head>

        <body>
          <main class="report-sheet">
            <header class="report-header">
              <h1>Reports Summary</h1>
              <p>
                Printable summary of generated reports, category breakdown,
                user report list, and completion performance.
              </p>
              <p>Prepared on ${new Date().toLocaleDateString()}</p>
            </header>

            ${printContent.outerHTML}
          </main>

          <script>
            window.onload = function () {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Reports
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Generate printable reports summary using charts and data tables.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{
            borderRadius: "999px",
            bgcolor: "#236192",
            fontWeight: 800,
            px: 3,
            boxShadow: "4px 4px 0px #111827",
            "&:hover": {
              bgcolor: "#17456b",
            },
          }}
        >
          Print Report
        </Button>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Monthly Report Output
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This chart compares how many reports were generated and how many
              were completed across the last few months.
            </Typography>

            <BarChart
              height={320}
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                },
              ]}
              series={[
                {
                  data: [12, 20, 18, 22, 27],
                  label: "Generated",
                },
                {
                  data: [8, 15, 14, 18, 23],
                  label: "Completed",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Report Category Share
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              The chart shows the distribution of report requests by category
              for the current reporting period.
            </Typography>

            <PieChart
              height={320}
              series={[
                {
                  data: [
                    { id: 0, value: 35, label: "Sales" },
                    { id: 1, value: 25, label: "Users" },
                    { id: 2, value: 20, label: "Inventory" },
                    { id: 3, value: 20, label: "Operations" },
                  ],
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Completion Performance
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This line chart monitors completed reports over the week.
            </Typography>

            <LineChart
              height={320}
              xAxis={[
                {
                  data: [1, 2, 3, 4, 5, 6, 7],
                  label: "Day",
                },
              ]}
              series={[
                {
                  data: [4, 8, 6, 12, 10, 15, 18],
                  label: "Completed Reports",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Report Users
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Sample users included in the generated report.
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ height: 360, width: "100%" }}>
              <DataGrid
                rows={reportRows}
                columns={reportColumns}
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
      </Stack>
    </Box>
  );
};

export default ReportsPage;