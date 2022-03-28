import React, { useContext, useEffect } from "react";
import withMainLayout from "../../layout/withMainLayout";
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { UserContext } from "../../context/user";

import pdfFile from "../../Assets/test.pdf";

import { useParams } from "react-router-dom";
import axios from "../../utls/axios";
import { toast } from "react-toastify";

const DocumentView = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [userData, setUserData] = useState();
  const { userState, documentAction } = useContext(UserContext);
  const { documentId } = useParams();
  const [application, setApplication] = useState();
  const [isReceivedOrNot, setIsReceivedOrNot] = useState(false);

  useEffect(() => {
    let appDate = userState?.receivedApplication?.find(
      (app) => app._id === documentId
    );
    if (appDate) {
      setApplication(appDate);
      setIsReceivedOrNot(true);
    } else {
      setApplication(
        userState?.sentApplication?.find((app) => app._id === documentId)
      );
    }
  }, []);
  console.log(application);
  // const app = userState?.receivedApplication?.filter(
  //   (application) => application._id === documentId
  // );
  // let attachment = null;
  // let subject = "";
  // if (app?.length > 0) {
  //   attachment = app[0]?.attachment[0]?.data;
  //   subject = app[0].subject;
  // }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  async function getApplicationData(id) {
    try {
      const res = await axios.get(`/application/${id}`);
      setUserData(res.data.user);
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.errors[0].msg);
      }
    }
  }

  useEffect(() => {
    getApplicationData(documentId);
  }, []);

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
        <TextField
          variant="outlined"
          sx={{
            width: "28%",
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
                {userData?.name}
              </Typography>
              <Typography varient="h7" sx={{ color: "rgba(69, 90, 100, 1)" }}>
                {userData?.email}
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
              {/* <Typography varient="h5">{(new Date(application?.createdAt)).toLocaleTimeString('en-IN',{
                hour:'numeric',minute:'numeric',
              })}</Typography> */}
              <Typography varient="h5">
                {new Date(application?.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {application?.status === "Pending" && isReceivedOrNot && (
              <>
                <Button
                  variant="contained"
                  sx={{ color: "white", backgroundColor: "green" }}
                  onClick={() => {
                    documentAction("Approved", documentId);
                  }}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red", color: "white" }}
                  onClick={() => {
                    documentAction("Declined", documentId);
                  }}
                >
                  Decline
                </Button>
              </>
            )}
            {application?.status === "Approved" && (
              <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
                Approved
              </Alert>
            )}
            {application?.status === "Declined" && (
              <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
                Declined
              </Alert>
            )}
            {application?.status === "Pending" && !isReceivedOrNot && (
              <Alert variant="filled" severity="info" sx={{ width: "100%" }}>
                Approval Pending
              </Alert>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            height: "35rem",
            width: "58%",
            borderRadius: "2%",
          }}
        >
          <Typography variant="h6">
            Subject:{" "}
            {application?.subject?.charAt(0).toUpperCase() +
              application?.subject.substr(1).toLowerCase()}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {application?.message}
          </Typography>
          {application?.attachment[0]?.data && (
            <img
              src={application?.attachment[0]?.data}
              alt="attachements"
              style={{
                height: "100%",
                width: "100%",
                justifySelf: "center",
              }}
            ></img>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export const DocumentViewLayout = withMainLayout(DocumentView);
