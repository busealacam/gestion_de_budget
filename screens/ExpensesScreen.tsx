import { Text, View } from "react-native"
import React, { useState } from "react";
import DatePicker from "../component/DataPicker";

export const ExpensesScreen = () => {
    const [operationDate, setOperationDate] = useState<string>("")
    return (
        <View>
            <DatePicker date={operationDate} onChangeDate={setOperationDate} />
        </View>
    )
}