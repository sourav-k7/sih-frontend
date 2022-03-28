import {
  Autocomplete,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { UserContext } from "../../../context/user";
import axios from "../../../utls/axios";

const NewApplicationDialog = ({ open, handleClose }) => {
  const { updateUserState, field, userState } = useContext(UserContext);
  const inputElRef = useRef(null);
  const [userSearchOpen, setUserSearchOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [userSearchLoading, setUserSearchLoading] = useState(false);
  const [userOption, setUserOption] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [typeOfApplication, setTypeOfApplication] = useState("");
  const [attachment, setAttachment] = useState(null);
  let searchTimer;

  async function SearchUser(name) {
    setUserSearchLoading(true);
    try {
      const res = await axios.get("/user/search", { params: { name } });
      setUserOption(res.data.users);
      setUserSearchLoading(false);
    } catch (error) {
      setUserSearchLoading(false);
      console.log(error);
    }
  }

  async function SaveApplication() {
    const form = new FormData();
    form.append("attachment", attachment);
    form.append("subject", subject);
    form.append("message", message);
    form.append("typeOfApplication", typeOfApplication);
    form.append("status", "Pending");
    form.append("name", selectedUser.name);
    form.append("sendToId", selectedUser._id);
    try {
      const res = await axios.post("/application", form, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      updateUserState(field.sentApplication, [
        ...userState[field.sentApplication],
        { ...res.data },
      ]);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    SearchUser("");
  }, []);

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"New Application"}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel id="type">Select type of application</InputLabel>
          <Select
            labelId="type"
            value={typeOfApplication}
            label="Select type of application"
            onChange={(event) => {
              setTypeOfApplication(event.target.value);
            }}
          >
            <MenuItem value={"Leave Application"}>Leave Application</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <Autocomplete
          open={userSearchOpen}
          value={selectedUser}
          onChange={(event, newValue) => {
            setSelectedUser(newValue);
          }}
          onInputChange={(event, newValue) => {
            if (searchTimer) {
              clearTimeout(searchTimer);
            }
            searchTimer = setTimeout(() => {
              SearchUser(newValue);
            }, 500);
          }}
          onOpen={() => {
            setUserSearchOpen(true);
          }}
          onClose={() => {
            setUserSearchOpen(false);
          }}
          getOptionLabel={(option) => option.name}
          options={userOption}
          sx={{ mb: 1 }}
          loading={userSearchLoading}
          isOptionEqualToValue={(option, value) => option._id === value._id}
          renderOption={(props, option) => (
            <li {...props} key={option._id}>
              {option.name}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Send to"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {userSearchLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />

        <TextField
          fullWidth
          sx={{ mb: 1 }}
          placeholder="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          multiline
          rows={5}
          fullWidth
          sx={{ mb: 1 }}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your application here"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "start" }}>
        <Button
          onClick={SaveApplication}
          variant="contained"
          sx={{ color: "white" }}
        >
          Save
        </Button>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <input
          type={"file"}
          accept="image/*,application/pdf,application/vnd.ms-excel"
          ref={inputElRef}
          style={{ display: "none" }}
          onChange={(e) => {
            setAttachment(e.target.files[0]);
          }}
          value=""
        />
        <IconButton onClick={() => inputElRef.current.click()}>
          <MdOutlineAttachment />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default NewApplicationDialog;
