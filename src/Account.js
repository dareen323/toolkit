import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	addAccount,
	deleteAccount,
} from "./accountSlice";
export default function Accounts() {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteAccount(id));
		dispatch(decrement());
	};
	const accounts = useSelector((state) => state.account.accounts);
	const numberOfAccounts = useSelector(
		(state) => state.account.numberOfAccounts
	);
	return (
		<>
			<div className="">
				<h1 className="text-lg font-bold text-center">
					Number of accounts: {numberOfAccounts}
				</h1>
				{/* <table>
					<thead>
						<td>Name</td>
						<td>Account Number</td>
						<td>Account Type</td>
						<td></td>
					</thead>
					<tbody className="">
						{accounts.map((acc) => {
							return (
								<th className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{acc.customerName}
									</td>
									<td>{acc.accountNumber}</td>
									<td>{acc.accountType}</td>
									<td>
										<button
											onClick={() => handleDelete(acc.id)}
											className="text-red-500"
										>
											Delete
										</button>
									</td>
								</th>
							);
						})}
					</tbody>
				</table> */}
			</div>
            <div className="m-5">
      <MDBTable>
          <MDBTableHead dark>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>CustomerName</th>
          <th scope='col'>Account number</th>
          <th scope='col'>account type</th>
          <th scope='col'></th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>

      {accounts.map((acc) => {
							return (
                                <tr
                             
                               
                              >
                                <th scope="row">{acc.id} </th>
                                <td >{acc.customerName}</td>
                                <td >{acc.accountNumber}</td>
                                <td >{acc.accountType}</td>
                                <td >
										<button
											onClick={() => handleDelete(acc.id)}
											className="bg-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
      </MDBTableBody>
          </MDBTable>
      </div>
		</>
	);
}