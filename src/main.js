import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, addAccount } from "./accountSlice";
export default function AddAccount() {
	const dispatch = useDispatch();
	const [accData, SetAccData] = useState({
		customerName: "",
		accountNumber: "",
		accountType: "",
	});

	const handleAddAccount = (e) => {
		e.preventDefault();

		dispatch(addAccount(accData));
		dispatch(increment());

		console.log(accData);
		SetAccData({
			customerName: "",
			accountNumber: "",
			accountType: "",
		});
	};
	return (
		<form onSubmit={handleAddAccount} className="flex flex-col gap-4 w-1/3">
			<div>
				<h1 className="text-lg font-bold text-center">Add a new account</h1>
				<div className="mb-2 block">
                <label htmlFor="customerName" value="Customer Name" >CustomerName</label>
				</div>
				<input
					id="name"
					type="text"
					placeholder=""
					required={true}
					shadow={true}
					value={accData.customerName}
					onChange={(e) =>
						SetAccData({ ...accData, customerName: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
                <label htmlFor="accountNumber" value="Account Number" >AccountNumber</label>
				</div>
				<input
					id="accnum"
					type="number"
					required={true}
					shadow={true}
					value={accData.accountNumber}
					onChange={(e) =>
						SetAccData({ ...accData, accountNumber: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
				<label className="mt-2 fw-bold"> Select Account_type :</label>
				</div>
				<input
					id="acctype"
					type="text"
					required={true}
					shadow={true}
					value={accData.accountType}
					onChange={(e) =>
						SetAccData({ ...accData, accountType: e.target.value })
					}
				/>
			</div>

			<button type="submit" className="btn-primary">Add Account</button>
			
		</form>
	);
}