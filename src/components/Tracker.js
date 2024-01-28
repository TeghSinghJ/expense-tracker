import React, { useState } from 'react'
import Transactions from './Transactions'
import ExportButton from './ExportButton';

const Tracker = (props) => {
    const {excelData,setExcelData} = props;
    const [tranTitle, setTranTitle] = useState('');
    const [tranAmount, setTranAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [trackerType,setTrackerType] = useState("expense")
    const [transactions, setTransactions] = useState([])
    
    const handleAdd = (newTransaction) => {
        const tempTransaction = [...transactions]
        tempTransaction.push({ tranTitle, tranAmount ,trackerType})
        setTransactions(tempTransaction);
        setExcelData(tempTransaction);
        if(trackerType==="expense"){
            const finalBalance = parseInt(balance-tranAmount);
            const finalExpense = parseInt(expenses+tranAmount)
            setBalance(finalBalance);
            setExpenses(finalExpense);
        }
        else{
            const finalBalance = parseInt(balance+tranAmount);
            const finalBudget = parseInt(budget+tranAmount)
            setBalance(finalBalance);
            setBudget(finalBudget);
        }
        setTranAmount(0);
        setTranTitle('');
        setTrackerType('expense')
        console.log(excelData)
        
    }
    
    const handleDelete=(index)=>{
        const deletedRecord = transactions.filter((v,i)=>i===index);
        // console.log(deletedRecord.tranAmount);
        setExpenses(expenses - deletedRecord[0].tranAmount);
        setBalance(balance+ deletedRecord[0].tranAmount);
        setTransactions(transactions.filter((v,i)=>i!==index))
        // console.log(deletedAmount)
        setExcelData(transactions);
    }
    return (
        <div className="container-fluid border border-light-subtle shadow-sm p-3 mb-5 bg-body rounded">
            {/* <div>
                <p>Have a great day! Good luck on your financial journey.</p>
            </div> */}
            <div className="row mb-3 my-3">
                <div className="col-8"><h2>Total Balance <b>&#8377;{balance}</b></h2></div>
                <div className="col text-end">
                    <button type="button" className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#addModal"><i class="bi bi-plus-lg mx-1"></i>Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 mb-3 mb-sm-0 " >
                    <div className="card  text-bg-light ">
                        <div className="card-body">
                            <h5 className="card-title">Expenses</h5>
                            <h1 className="card-text"> &#8377;{expenses}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-bg-light">
                        <div className="card-body">
                            <h5 className="card-title">Budget</h5>
                            <h1 className="card-text">&#x20B9;{budget}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card text-bg-light">
                        <div className="card-body">
                            <h5 className="card-title">Transactions</h5>
                            <h1 className="card-text">{(transactions.length<10)?'0':''}{transactions.length}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Transactions transactions={transactions} handleDelete={handleDelete}/>
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Transaction</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6"><div className="form-check">
                                    <input className="form-check-input" type="radio" onChange={()=>setTrackerType("expense")} name="expense" id="expense" value="expense" checked={trackerType==="expense" } />
                                    <label className="form-check-label" htmlFor="expense">
                                        Expense
                                    </label>
                                </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="budget" onChange={()=>setTrackerType("budget")} id="budget" value="budget" checked={trackerType==="budget"}/>
                                        <label className="form-check-label" htmlFor="budget">
                                            Budget
                                        </label>
                                    </div></div>
                            </div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Details</label>
                                <input type="text" className="form-control" id="details" value={tranTitle} onChange={(e) => setTranTitle(e.target.value)} placeholder="Enter details" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Amount</label>
                                <input type="number" className="form-control" id="amount" value={tranAmount} onChange={e => setTranAmount(parseInt(e.target.value))} placeholder="Amount" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleAdd} data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker
