import { StyleSheet, View } from "react-native"
import React from "react";
import { Avatar, DataTable, Text } from "react-native-paper";
import { DataList } from "../component/DataList";
import { amountExpense, amountIncome, eurFR, solde } from "../func/getData";



export const CountScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styleHeader}>
                <Text style={styles.textTitle}>Compte</Text>
                <Avatar.Image size={40} source={require("../image/user_avatar.jpg")} />
            </View>
            <View>
                <DataTable.Row style={{ backgroundColor: "#8bc2a8" , marginBottom: 10 }}>
                    <DataTable.Cell>Sum de Revenus</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={{ color: "green" }}>{eurFR.format(amountIncome)}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{ backgroundColor: "#ed99a1", marginBottom: 10 }}>
                    <DataTable.Cell>Sum de Dépenses</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={{ color: "red" }}>{eurFR.format(amountExpense)}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{backgroundColor: "#b4b9bd", marginBottom: 10}}>
                    <DataTable.Cell>Solde</DataTable.Cell>
                    <DataTable.Cell numeric>{eurFR.format(solde)}</DataTable.Cell>
                </DataTable.Row>
            </View>
            <DataList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    styleHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    textTitle: {
        fontSize: 25,
        color: "black"
    },
})