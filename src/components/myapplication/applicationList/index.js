import {Tab,
	tabClasses,
	Tabs,} from '@mui/material';
	import { styled } from "@mui/system";
import { useState } from 'react';


const StyledTab = styled(Tab)`
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

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
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;


const ApplicationList = () =>{
	const [currentTab, setCurrentTab] = useState("Approved");
	return (
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
	)
}

export default ApplicationList;