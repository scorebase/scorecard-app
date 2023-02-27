import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const GroupCard = ({group}) => {

    const qualificationStatus = (color:string) => {
        return <View style= {{backgroundColor:color,height:6,width:6,borderRadius:6}}/>
    
    }
    const  [tableHead, setTableHead] = useState(['', 'Club', 'W', 'D', 'L','P'])
    const [tableData,setTableData]= useState([
        [qualificationStatus('#00D1FF'), 'Biomed', '0', '0','0','0'],
        [qualificationStatus('#FF9E0D'), 'Mech', '0', '0','0','0'],
        [qualificationStatus('#BABABA'), 'Pet/gas', '0', '0','0','0'],
      ])

  
  return (
    <View style={{width:'98%', height:250,backgroundColor:'white', alignSelf:'center',borderRadius:12, shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding:10,
    paddingTop:15,
    marginTop:24
    }}>
      <Text style={{fontWeight:'500', fontSize:17,letterSpacing:1}}>Group {group}</Text>
      <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={tableHead} style={styles.head}  textStyle={styles.text} />
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellData}  textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <View style={{flexDirection:'row', marginTop:7}}>
            <View style={{flexDirection:'row',alignItems:"center" }}>{qualificationStatus('#00D1FF')}<Text style={{marginLeft:8}}>Qualified</Text></View>
            <View style={{flexDirection:'row',alignItems:"center" ,marginLeft:16}}>{qualificationStatus('#FF9E0D')}<Text style={{marginLeft:8}}>Best Loser</Text></View>
        </View>
    </View>
  )
}

export default GroupCard

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: 'red' },
    head: { height: 40, backgroundColor: 'white' ,borderBottomColor:'#ACACAC',borderBottomWidth:0.5},
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: 'white' ,borderBottomColor:'#ACACAC',borderBottomWidth:0.5 ,padding:6},
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });