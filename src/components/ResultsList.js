import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {

  if (!results.length) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 1,
    paddingBottom: 0
  },
  titleStyle: {
    paddingLeft: 3,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default withNavigation(ResultsList)