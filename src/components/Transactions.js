import React from 'react'
import Transaction from './Transaction'

const Transactions = (props) => {
    const {transactions,handleDelete} = props;
    return (
        <div className='container-fluid border border-light my-3 '>
            <h3 className='my-3'>Transactions</h3>
            {/* <div className='container-fluid'>
            <input className="form-control my-3" type="text" placeholder="Search transaction history" aria-label="search" />
            </div> */}
            <div className='container-fluid my-3'>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">  <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/></th>
                            <th scope="col">TRANSACTION NAME</th>
                            <th scope="col">AMOUNT</th>
                            <th scope="col">TRANSACTION TYPE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        { transactions.map((t,index)=>(
                            <Transaction handleDelete={handleDelete} index={index} title={t.tranTitle} amount={t.tranAmount} trackerType={t.trackerType}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions
