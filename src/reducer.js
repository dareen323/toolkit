
const initState = {
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
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case "ADD_ACCOUNT":
        return {
          accounts: [...state.accounts, action.payload],
          numberOfAccounts: state.numberOfAccounts + 1,
        };
      case "REMOVE_ACCOUNT":
        return {
          accounts: action.payload,
          numberOfAccounts: state.numberOfAccounts - 1,
        };
      default:
        return state;
    }
  };

  export default reducer;