import React from 'react'
import { downloadExcel } from "react-export-table-to-excel";

const ExportButton = ({excelData}) => {
    const header = ["Transaction Name", "Amount", "Transaction Type"];
    const body = [
        ["", , ""],
        ["", ,""],
      ];
    function handleDownloadExcel() {
        downloadExcel({
          fileName: "My Expenses Tracking data",
          sheet: "Sheet1",
          tablePayload: {
            header,
            // accept two different data structures
            body: excelData,
          },
        });
      }
  return (
    <div>
        <button className="btn btn-outline-primary" onClick={handleDownloadExcel}><i className="bi bi-file-earmark-arrow-down mx-1"></i>Export .CSV</button>
    </div>
  )
}

export default ExportButton
