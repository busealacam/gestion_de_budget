import moment from "moment"
import { ScrollView, View } from "react-native"
import { DataTable } from "react-native-paper"
import { allCount } from "../func/getData"
import React from "react";

export const DataList = () => {
    return (
        <View style={{ flex: 1, paddingBottom: 100}}>
            <DataTable >
                <DataTable.Header>
                    <DataTable.Title>Categorie</DataTable.Title>
                    <DataTable.Title numeric>Date</DataTable.Title>
                    <DataTable.Title numeric>Prix</DataTable.Title>
                </DataTable.Header>
                <ScrollView>
                    {
                        allCount.map((value, index) => {
                            return (
                                <DataTable.Row key={index}>
                                    <DataTable.Cell> {value.category}</DataTable.Cell>
                                    <DataTable.Cell numeric>{moment(value.date).format("DD MMM, YYYY")}</DataTable.Cell>
                                    <DataTable.Cell numeric textStyle={{ color: value._id_income ? "green" : "red" }}>{value._id_income ? " + " : " - "}{value.amount}</DataTable.Cell>
                                </DataTable.Row>
                            )
                        })
                    }
                </ScrollView>
            </DataTable>
        </View>
    )
}