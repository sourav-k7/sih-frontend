import React, { useContext, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { UserContext } from "../../../context/user";

const SalarySlip = () => {
	const { userState } = useContext(UserContext);
	const { salarySlip } = userState;

	const [numPages, setNumPages] = useState(null);
	const [pdfFile, setPDFFile] = useState(salarySlip);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	return (
		<div>
			{salarySlip && (
				<Document file={pdfFile}>
					<Page height="600" pageNumber={pageNumber}></Page>
				</Document>
			)}
		</div>
	);
};

export default SalarySlip;
