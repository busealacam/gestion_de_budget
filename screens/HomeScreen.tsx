import moment from 'moment';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Avatar, DataTable } from 'react-native-paper';
import { amountExpense, dataIncome, eurFR, filterData, lastActions, solde } from '../func/getData';

export const HomeScreen = ({ route, navigation }: any) => {

  return (
    <>
      {
        <View style={styles.container}>
          <View style={styles.styleHeader}>
            <Text style={styles.textTitle}>Bonjour,{" "} {filterData[0].user}</Text>
            <Avatar.Image size={40} source={require("../image/user_avatar.jpg")} />
          </View>
          <DataTable.Row>
            <DataTable.Cell textStyle={styles.styleh2}>Solde</DataTable.Cell>
            <DataTable.Cell textStyle={styles.styleSum} numeric>{eurFR.format(solde)}</DataTable.Cell>
          </DataTable.Row>
          <View>
            <Text style={styles.styleh2}>Les Derniers Actions</Text>
            {
              lastActions.map((value, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{value.category}</DataTable.Cell>
                    <DataTable.Cell numeric>{moment(value.date).format("DD MMM, YYYY")}</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={{ color: value._id_income ? "green" : "red" }}>{value._id_income ? " + " : " - "}{value.amount}</DataTable.Cell>
                  </DataTable.Row>
                )
              })
            }
          </View>
          <Text style={styles.styleh2}>Les Actions Rapide</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <View style={styles.button}>
              <Button
                color='#7A8AED'
                title="Ajout Revenus"
                onPress={() => navigation.navigate("Revenus", route = dataIncome)}
              />
            </View>
            <View style={styles.button}>
              <Button
                color='#7A8AED'
                title="Ajout Dépenses"
                onPress={() => navigation.navigate("Dépenses", route = amountExpense)}
              />
            </View>
          </View>

        </View>
      }
    </>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    padding: 8,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-around"
  },
  styleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    color: 'white',
    backgroundColor: '#7A8AED',
  },
  textTitle: {
    fontSize: 25,
    color: "black"
  },
  styleSum: {
    fontSize: 25,
    textAlign: "right",
    color: "#7B61FF",
    fontWeight: "bold"
  },
  styleh2: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  }
});
