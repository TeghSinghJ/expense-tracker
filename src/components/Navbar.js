import React from 'react'
import ExportButton from './ExportButton'

const Navbar = ({excelData}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border border-light-subtle  " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Expense Tracker</a>
                <div>
                <ExportButton excelData={excelData} fileName="My Expenses Data"/>

                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
