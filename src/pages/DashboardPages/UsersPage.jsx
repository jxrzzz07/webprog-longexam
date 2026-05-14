import { useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { DataGrid } from "@mui/x-data-grid";
import usersSeed from "../../data/users.json?raw";

const roles = ["admin", "viewer", "editor"];
const genders = ["male", "female", "other"];

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "viewer",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? "").trim(),
        lastName: String(user.lastName ?? "").trim(),
        age: String(user.age ?? "").trim(),
        gender: genders.includes(
          String(user.gender ?? "").trim().toLowerCase()
        )
          ? String(user.gender ?? "").trim().toLowerCase()
          : "",
        contactNumber: String(user.contactNumber ?? "").trim(),
        email: String(user.email ?? "").trim().toLowerCase(),
        role: roles.includes(String(user.role ?? "").trim().toLowerCase())
          ? String(user.role ?? "").trim().toLowerCase()
          : "viewer",
        username: String(user.username ?? "").trim().toLowerCase(),
        password: String(user.password ?? ""),
        address: String(user.address ?? "").trim(),
        isActive: typeof user.isActive === "boolean" ? user.isActive : true,
      })),
      error: "",
    };
  } catch {
    return {
      users: [],
      error: "Unable to read users from src/data/users.json.",
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const [users, setUsers] = useState(seed.users);
  const [seedError] = useState(seed.error);

  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const filteredUsers = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !keyword ||
        user.firstName.toLowerCase().includes(keyword) ||
        user.lastName.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword) ||
        user.username.toLowerCase().includes(keyword);

      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesGender =
        genderFilter === "all" || user.gender === genderFilter;

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && user.isActive) ||
        (statusFilter === "inactive" && !user.isActive);

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, query, roleFilter, genderFilter, statusFilter]);

  const handleChange = (field) => (event) => {
    const value =
      field === "isActive" ? event.target.checked : event.target.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!form.age.trim()) {
      nextErrors.age = "Age is required.";
    } else if (!/^\d+$/.test(form.age.trim())) {
      nextErrors.age = "Age must be a number only.";
    }

    if (!form.gender) {
      nextErrors.gender = "Please select a gender.";
    }

    if (!form.contactNumber.trim()) {
      nextErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = "Contact number must be 11 digits.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.username.trim()) {
      nextErrors.username = "Username is required.";
    } else if (/\s/.test(form.username.trim())) {
      nextErrors.username = "Username must not contain spaces.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Address is required.";
    }

    return nextErrors;
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setForm(blankForm);
    setErrors({});
    setShowPassword(false);
    setOpen(true);
  };

  const handleOpenEdit = (user) => {
    setEditingId(user.id);

    setForm({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      contactNumber: user.contactNumber,
      email: user.email,
      role: user.role,
      username: user.username,
      password: user.password,
      address: user.address,
      isActive: user.isActive,
    });

    setErrors({});
    setShowPassword(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingId(null);
    setForm(blankForm);
    setErrors({});
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      ...form,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender,
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role,
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    if (editingId) {
      setUsers((current) =>
        current.map((user) =>
          user.id === editingId
            ? {
                ...payload,
                id: editingId,
              }
            : user
        )
      );
    } else {
      const nextId =
        users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

      setUsers((current) => [
        ...current,
        {
          ...payload,
          id: nextId,
        },
      ]);
    }

    handleClose();
  };

  const handleToggleStatus = (id) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? {
              ...user,
              isActive: !user.isActive,
            }
          : user
      )
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 190,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "username",
      headerName: "Username",
      width: 160,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 230,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      valueFormatter: (value) => labelize(value),
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Chip
          label={labelize(params.value)}
          size="small"
          sx={{
            fontWeight: 800,
            bgcolor: "#e0ecf8",
            color: "#236192",
          }}
        />
      ),
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 130,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Chip
          label={params.value ? "Active" : "Inactive"}
          size="small"
          sx={{
            fontWeight: 800,
            bgcolor: params.value ? "#236192" : "#71717a",
            color: "#ffffff",
          }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 230,
      sortable: false,
      filterable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={(event) => {
              event.stopPropagation();
              handleOpenEdit(params.row);
            }}
            sx={{
              borderColor: "#236192",
              color: "#236192",
              fontWeight: 800,
              minWidth: 82,
            }}
          >
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={(event) => {
              event.stopPropagation();
              handleToggleStatus(params.row.id);
            }}
            sx={{
              bgcolor: params.row.isActive ? "#dc2626" : "#16a34a",
              fontWeight: 800,
              minWidth: 96,
              "&:hover": {
                bgcolor: params.row.isActive ? "#991b1b" : "#15803d",
              },
            }}
          >
            {params.row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Users
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Search, filter, add, and edit user records with validation.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
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
          Add User
        </Button>
      </Stack>

      {seedError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {seedError}
        </Alert>
      )}

      <Card
        sx={{
          border: "2px solid #111827",
          borderRadius: "22px",
          boxShadow: "5px 5px 0px #236192",
        }}
      >
        <CardContent>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <TextField
              label="Search users"
              placeholder="Search first name, last name, email, or username"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              fullWidth
            />

            <TextField
              select
              label="Role"
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
              sx={{ minWidth: 170 }}
            >
              <MenuItem value="all">All Roles</MenuItem>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {labelize(role)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Gender"
              value={genderFilter}
              onChange={(event) => setGenderFilter(event.target.value)}
              sx={{ minWidth: 170 }}
            >
              <MenuItem value="all">All Genders</MenuItem>
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {labelize(gender)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              sx={{ minWidth: 170 }}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 560, width: "100%" }}>
            <DataGrid
              rows={filteredUsers}
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

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 900 }}>
          {editingId ? "Edit User" : "Add User"}
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              label="First Name"
              value={form.firstName}
              onChange={handleChange("firstName")}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />

            <TextField
              label="Last Name"
              value={form.lastName}
              onChange={handleChange("lastName")}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />

            <TextField
              label="Age"
              value={form.age}
              onChange={handleChange("age")}
              error={Boolean(errors.age)}
              helperText={errors.age || "Numbers only"}
            />

            <TextField
              select
              label="Gender"
              value={form.gender}
              onChange={handleChange("gender")}
              error={Boolean(errors.gender)}
              helperText={errors.gender}
            >
              <MenuItem value="" disabled>
                Select gender
              </MenuItem>
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {labelize(gender)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Contact Number"
              value={form.contactNumber}
              onChange={handleChange("contactNumber")}
              error={Boolean(errors.contactNumber)}
              helperText={errors.contactNumber || "Must be 11 digits"}
              inputProps={{ maxLength: 11 }}
            />

            <TextField
              label="Email"
              value={form.email}
              onChange={handleChange("email")}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              select
              label="Role"
              value={form.role}
              onChange={handleChange("role")}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {labelize(role)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Username"
              value={form.username}
              onChange={handleChange("username")}
              error={Boolean(errors.username)}
              helperText={errors.username || "Username must not contain spaces"}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange("password")}
              error={Boolean(errors.password)}
              helperText={errors.password || "At least 8 characters"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((current) => !current)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={form.isActive}
                  onChange={handleChange("isActive")}
                />
              }
              label={`User status: ${form.isActive ? "Active" : "Inactive"}`}
              sx={{ alignSelf: "center" }}
            />

            <TextField
              label="Address"
              value={form.address}
              onChange={handleChange("address")}
              error={Boolean(errors.address)}
              helperText={errors.address}
              multiline
              minRows={3}
              sx={{
                gridColumn: {
                  xs: "1",
                  sm: "1 / span 2",
                },
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={handleClose}>Cancel</Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#236192",
              fontWeight: 800,
              "&:hover": {
                bgcolor: "#17456b",
              },
            }}
          >
            {editingId ? "Save Changes" : "Add User"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;