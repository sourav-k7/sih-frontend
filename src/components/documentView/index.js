import React from "react";
import withMainLayout from "../../layout/withMainLayout";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	InputAdornment,
	Tab,
	tabClasses,
	Tabs,
	TextField,
	Button,
	Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { padding, styled } from "@mui/system";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { AppBar } from "@mui/material";

import pdfFile from "../../Assets/test.pdf";

import theme from "../../theme";
import axios from "../../utls/axios";

const DocumentView = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	async function getApplicationData(id){
		try {
		  const res = await axios.get(`/application/${id}`);
		  
		} catch (error) {
		  console.log(error);
		}
	  }

	function changePage(offSet) {
		setPageNumber((prevPageNumber) => prevPageNumber + offSet);
	}

	function changePageBack() {
		changePage(-1);
	}

	function changePageNext() {
		changePage(+1);
	}
	const defaultPdfFile = useState(pdfFile);
	return (
		<Container maxWidth="lg" sx={{ mt: 2 }}>
			<Box display="flex" justifyContent={"space-between"}>
				{/* <Typography
					variant="h4"
					fontWeight={700}
					gutterBottom
					sx={{
						display: "inline",
						borderBottom: (theme) =>
							`3px solid ${theme.palette.primary.main}`,
					}}
				>
					Document View
				</Typography> */}
				<TextField
					variant="outlined"
					sx={{
						width: "32%",
						position: "fixed",
						top: 10,
						height: "12rem",
						left: "50%",
						margin: "auto",
						zIndex: 4,
						transform: "translateX(-50%)",
					}}
					placeholder="Search Document"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<BsSearch />
							</InputAdornment>
						),
					}}
				/>
				{/* <Box display={"flex"} alignItems="center">
					<Typography variant="body1" fontWeight={700}>
						Hello, John
					</Typography>
					&emsp;
					<Avatar
						sx={{ bgcolor: (theme) => theme.palette.primary.main }}
					/>
				</Box> */}
			</Box>
			<Box sx={{ display: "flex", gap: 6, marginTop: "1rem" }}>
				<Box
					sx={{
						height: "35rem",
						width: "25%",
						borderRadius: "2%",
						backgroundColor: (theme) => theme.palette.primary.main,
						color: "white",
						padding: "1rem",
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
				>
					<Typography varient="h3" sx={{ fontSize: 20 }}>
						Sender
					</Typography>
					<Box
						sx={{
							height: "16%",
							backgroundColor: "white",
							display: "flex",
							borderRadius: "2%",
							color: "black",
							padding: "1rem",
						}}
					>
						<Box sx={{ display: "grid" }}>
							<Typography varient="h3" sx={{ fontSize: 22 }}>
								Marie Smith
							</Typography>
							<Typography
								varient="h7"
								sx={{ color: "rgba(69, 90, 100, 1)" }}
							>
								mariesmith@gov.in
							</Typography>
						</Box>
					</Box>
					<Typography varient="h3" sx={{ fontSize: 20 }}>
						Send At
					</Typography>
					<Box
						sx={{
							height: "10%",
							backgroundColor: "white",
							display: "flex",
							borderRadius: "2%",
							color: "black",
							padding: "1rem",
						}}
					>
						<Box sx={{ display: "grid" }}>
							<Typography varient="h5">13-04-2022</Typography>
							<Typography varient="h5">12:30:25 PM</Typography>
						</Box>
					</Box>
					<Typography varient="h3" sx={{ fontSize: 20 }}>
						Details
					</Typography>
					<Box
						sx={{
							height: "25%",
							backgroundColor: "white",
							display: "flex",
							borderRadius: "2%",
							color: "black",
							padding: "1rem",
						}}
					>
						<Box sx={{ display: "grid" }}>
							<Typography varient="body1">
								You will find the list of tendors for braille
								tablets. Please approve this at Desk 2 level and
								forward for further approvals.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						height: "35rem",
						width: "58%",
						borderRadius: "2%",
					}}
				>
					<Document
						file={pdfFile}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page height="600" pageNumber={pageNumber}></Page>
					</Document>
					<p>
						{" "}
						Page {pageNumber} of {numPages}
						{pageNumber > 1 && (
							<Button onClick={changePageBack}>Prev</Button>
						)}
						{pageNumber < numPages && (
							<Button onClick={changePageNext}>Next</Button>
						)}
					</p>
				</Box>
				
			</Box>
		</Container>
	);
};

export const DocumentViewLayout = withMainLayout(DocumentView);
