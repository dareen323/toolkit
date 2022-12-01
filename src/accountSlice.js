import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accounts: [
		{
			id: 1,
			customerName: "Israa Othman",
			accountNumber: "123456",
			accountType: "Savings",
		},
		{
			id: 2,
			customerName: "Ahmad Zahran",
			accountNumber: "987654",
			accountType: "Student accounts",
		},
		

	],
	numberOfAccounts: 2,
};

export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		addAccount: (state, action) => {

			const data = { ...action.payload, id: state.numberOfAccounts + 1 };
			const newData = [...state.accounts, data];
			return { ...state, accounts: newData };
		},
		increment: (state) => {
			state.numberOfAccounts += 1;
		},
		decrement: (state) => {
			state.numberOfAccounts -= 1;
		},
		deleteAccount: (state, action) => {
			const newArr = state.accounts.filter((i) => i.id != action.payload);
			return { ...state, accounts: newArr };
		},
	},
});

export const { increment, decrement, addAccount, deleteAccount } =
	accountSlice.actions;

export default accountSlice.reducer;