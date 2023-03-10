import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { setActivePaginationPage } from "../../redux/slice/categorySort_and_PaginationSlice";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(setActivePaginationPage(value));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        page={page}
        onChange={handleChange}
        color="warning"
        size="large"
      />
    </Stack>
  );
}
