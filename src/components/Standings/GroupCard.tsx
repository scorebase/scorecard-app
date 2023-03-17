import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { IMembers } from '../../screens/StandingsView/StandingsView';
interface GroupCardProps {
  group: string
  groupMembers: IMembers[]
}
const GroupCard = ({ group, groupMembers }) => {
  const sortedGroupMembers = groupMembers.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points; // sort by points descending
    } else {
      return a.goals_conceded - b.goals_conceded; // sort by goals conceded ascending
    }
  });
  console.log('the sorted gorup members are', sortedGroupMembers)
  const qualificationStatus = (color: string) => {
    return <View style={{ backgroundColor: color, height: 6, width: 6, borderRadius: 6 }} />

  }
  const noOfWins = (wins: number): number => {
    return wins
  }
  const noOfDraws = (draws: number): number => {
    return draws
  }
  const noOfLosses = (losses: number): number => {
    return losses
  }
  const noOfPoints = (points: number): number => {
    return points
  }
  const nameOfTeam = (teamName: string): string => {
    return teamName
  }
  const goalDiff = (goalDifference: number): number => {
    return goalDifference
  }
  const qualifiers = sortedGroupMembers[0]
  const bestLossers = sortedGroupMembers[1]
  const lossers = sortedGroupMembers[2]
  const [tableHead, setTableHead] = useState(['','Club','W','D','L','GD', 'P',])
  const [tableData, setTableData] = useState([
    [qualificationStatus('#00D1FF'), nameOfTeam(qualifiers.Team?.short_name ?? '--'), noOfWins(qualifiers.wins), noOfDraws(qualifiers.draws), noOfLosses(qualifiers.losses), goalDiff(qualifiers.goals_scored - qualifiers.goals_conceded), noOfPoints(qualifiers.points)],
    [qualificationStatus('#FF9E0D'), nameOfTeam(bestLossers.Team?.short_name ?? '--'), noOfWins(bestLossers.wins), noOfDraws(bestLossers.draws), noOfLosses(bestLossers.losses), goalDiff(bestLossers.goals_scored - bestLossers.goals_conceded), noOfPoints(bestLossers.points)],
    [qualificationStatus('#BABABA'), nameOfTeam(lossers.Team?.short_name ?? '--'), noOfWins(lossers.wins), noOfDraws(lossers.draws), noOfLosses(lossers.losses), goalDiff(lossers.goals_scored - lossers.goals_conceded), noOfPoints(lossers.points)],
  ])


  return (
    <View style={{
      width: '98%', height: '30%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 12, shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      padding: 10,
      paddingTop: 15,
      marginTop: 24,
    }}>
      <Text style={{ fontWeight: '500', fontSize: 17, letterSpacing: 1 }}>{group}</Text>
      <Table borderStyle={{ borderColor: 'transparent' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {
          tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {
                rowData.map((cellData, cellIndex) => (
                  <Cell key={cellIndex} data={cellData} textStyle={styles.text} />
                ))
              }
            </TableWrapper>
          ))
        }
      </Table>
      <View style={{ flexDirection: 'row', marginTop: 7, }}>
        <View style={{ flexDirection: 'row', alignItems: "center" }}>{qualificationStatus('#00D1FF')}<Text style={{ marginLeft: 8 }}>Qualified</Text></View>
        <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 16 }}>{qualificationStatus('#FF9E0D')}<Text style={{ marginLeft: 8 }}>Best Loser</Text></View>
      </View>
    </View>
  )
}

export default GroupCard

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'red' },
  head: { height: 40, backgroundColor: 'white', borderBottomColor: '#ACACAC', borderBottomWidth: 0.5 },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: 'white', borderBottomColor: '#ACACAC', borderBottomWidth: 0.5, padding: 6 },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});