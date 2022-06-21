import { Data } from "../data";
import { IData, IExpense, IIncome } from "../interfaces/interfaceDate";
import 'intl';
import 'intl/locale-data/jsonp/fr'

export const filterData = Data.filter(value => {
    if (value._id ==  "18c79361-d05f-437b-9909-685db8d4910a")
        return value
}).map((value: IData) => value);

export const eurFR = Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
});

export const dataIncome = filterData[0].incomes.map((value: IIncome) => value)

export const dataExpense = filterData[0].expenses.map((value: IExpense) => value)

export const amountIncome: number = dataIncome.filter(value => { 
    return value.amount; 
}).reduce( (accu, a) => (accu + Number(a.amount.replace(/[^0-9.-]+/g,""))), 0);

export const amountExpense: number = dataExpense.filter(value => { 
  return value.amount; 
}).reduce( (accu, a) => (accu + Number(a.amount.replace(/[^0-9.-]+/g,""))), 0);

export const solde: number = (amountIncome - amountExpense)

///// Income ///////

export const allIncome = dataIncome.map((value) => value)

export const sortIncome = dataIncome.sort((a,b) => Date.parse(b.date) - Date.parse(a.date) )

export const firstIncome = sortIncome[0]

///// Expense //////

export const allExpense = dataExpense.map((value) => value)

export const sortExpense = dataExpense.sort((a,b) => Date.parse(b.date) - Date.parse(a.date) )

export const firstExpense = sortExpense[0]

export const allCount = allIncome.concat(allExpense)
export const sortByDate = allCount.sort(function(a,b) {
    return Date.parse(b.date) - Date.parse(a.date);
})

export const lastActions = sortByDate.slice(0, 4)