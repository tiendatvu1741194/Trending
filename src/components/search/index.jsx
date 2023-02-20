import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Tags() {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={[]}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[13]]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Multiple values"
          placeholder=""
        />
      )}
    />
  );
}
