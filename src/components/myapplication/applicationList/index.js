import {
  Box,
  Tab,
  tabClasses,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const StyledTab = styled(Tab)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #ffd4ce;
  }

  &:focus {
    color: #fff;
    background-color: #ffb8ae;
  }

  &.${tabClasses.selected} {
    background-color: #ff725e;
    color: white;
  }
`;

const TabBar = styled(Tabs)`
  background-color: #ffe7e3;
  border-radius: 8px;
  margin-bottom: 16px;
`;

function TabPanel(props) {
  const { value, index, data } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.subject}
                  </TableCell>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </div>
  );
}

const ApplicationList = ({ dataList }) => {
  const [currentTab, setCurrentTab] = useState("Approved");
  return (
    <>
      <TabBar
        value={currentTab}
        onChange={(e, newValue) => setCurrentTab(newValue)}
        variant="fullWidth"
        indicatorColor="transparent"
      >
        <StyledTab value="Approved" label="Approved" />
        <StyledTab value="Rejected" label="Rejected" />
        <StyledTab value="Pending" label="Pending" />
      </TabBar>
     
      <TabPanel
        value={currentTab}
        index="Approved"
        data={dataList?.filter((app) => app.status === "Approved")}
      />
      <TabPanel
        value={currentTab}
        index="Rejected"
        data={dataList?.filter((app) => app.status === "Declined")}
      />
      <TabPanel
        value={currentTab}
        index="Pending"
        data={dataList?.filter((app) => app.status === "Pending")}
      />
    </>
  );
};

export default ApplicationList;
