import "./styles.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import copy from "clipboard-copy";

function convertSowIds(sowIds) {
  return sowIds
    .split(/\s/)
    .map((s) => s.trim())
    .filter((s) => s !== (null || ""))
    .map((s) => `'${s}'`)
    .join(",");
}

export default function App() {
  const [state, setState] = useState({ sowIds: "" });
  const newIds = convertSowIds(state.sowIds);
  return (
    <div className="App">
      <Container>
        <TextField
          fullWidth={true}
          variant="outlined"
          id="sowIds"
          name="sowIds"
          multiline={true}
          value={state.sowIds}
          placeholder="ID List"
          onChange={(e) => {
            const newValue = e.target?.value;
            setState((prev) => ({ ...prev, sowIds: newValue || "" }));
          }}
        />
      </Container>
      <Container>
        <TextField
          fullWidth={true}
          variant="outlined"
          id="sowList"
          name="sowList"
          multiline={true}
          value={newIds}
          disabled={true}
        />
      </Container>
      <Container>
        <Button variant="outlined" onClick={(e) => copy(newIds)}>
          Copy
        </Button>
      </Container>
    </div>
  );
}
