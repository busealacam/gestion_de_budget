export interface IIncome {
    date: string,
    amount: string,
    category: string,
    comments: string,
    _id_income: string
}
export interface IExpense {
    date: string,
    amount: string,
    category: string,
    comments: string,
    _id_expense: string
}

export interface IData {
    _id: string,
    user:string,
    incomes: IIncome[],
    expenses: IExpense[],
}