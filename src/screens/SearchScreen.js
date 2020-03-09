import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  console.log(results)

  const filterResultsByPrice = (price) => {
    // price === '€' || '€€' || '€€€'
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.text}>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('€')}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('€€')}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('€€€')}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'

  }
})

export default SearchScreen