import { StyleSheet, Text, View } from "react-native"
import React, { useRef, useState } from "react";
import { Controller, NestedValue, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "../component/DataPicker";
import * as yup from 'yup';

type FormData = {
    firstName: string,
    lastName: string,
    total: number,
    date: Date,
    category: NestedValue<string[]>,
    text: string,
}

let schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    total: yup.number().required().positive().integer(),
    date: yup.date().default(function () {
        return new Date();
    }),
    category: yup.array()
        .of(
            yup.object().shape({
            label: yup.string(),
            value: yup.string(),
        })
    ),
    text: yup.string().required(),
})

type Option = {
    label: string,
    value: string,
}

const listOptions = [
    { label: "Salaire et assimilé", value: "salaire et assimilé" },
    { label: "Revenu financier", value: "Revenu financier" },
    { label: "Rente", value: "Rente" },
    { label: "Pension alimentaire", value: "Pension alimentaire" },
    { label: "Allocation chômage", value: "Allocation chômage" },
    { label: "Prestations sociales", value: "Prestations sociales" },
    { label: "Revenu foncier", value: "Revenu foncier" },
    { label: "Revenu exceptionnel", value: "Revenu exceptionnel" },
    { label: "Autre revenu", value: "Autre revenu" },
]


export const IncomesScreen = ({navigation}: any) => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);
    const [selectedOptions, setSelectedOptions] = useState("")
    const [operationDate, setOperationDate] = useState<string>("")
    console.log(operationDate)
    return (
        <View style={styles.container}>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.styleInput}
                        label={"Prénom"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.styleInput}
                        label={"Nom"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="lastName"
            />
            {errors.lastName && <Text>This is required.</Text>}

            <View style={styles.styleInput}>
                <Picker
                    selectedValue={selectedOptions}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedOptions(itemValue)
                    }
                >
                    {listOptions.map((value, index) => {
                        return (
                            <Picker.Item key={index} label={value.label} value={value.value} />
                        )
                    })}
                </Picker>
            </View>
            <Controller
                control={control}
                name="date"
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <DatePicker 
                        date={operationDate}
                        placeholderText="date"
                        onChangeDate={setOperationDate}
                        />
                )}

            />
            {errors.date && <Text>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.styleInput}
                        label={"Text"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="text"
            />
            <Button style={styles.styleButton} mode="contained" onPress={handleSubmit(onSubmit)} >Submit</Button> 
            <Button 
                style={styles.styleCancelButton} 
                mode="contained" 
                onPress={() => navigation.navigate("Opération")} >
                    Annuler
            </Button>     

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    styleInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white"
    },
    styleButton: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#7A8AED",
    },
    styleCancelButton: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "grey",
    }

})