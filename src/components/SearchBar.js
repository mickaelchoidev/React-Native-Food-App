import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <View style={styles.container}>
        <Ionicons
          name='ios-search'
          style={styles.iconStyle}
        />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder='Search'
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row'
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    paddingTop: 4,
    paddingHorizontal: 10,
    borderTopLeftRadius: 4,
    fontSize: 30,
    alignSelf: 'center',
    alignSelf: 'center',
  }
})

export default SearchBar


