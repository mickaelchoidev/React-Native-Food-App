import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native'
import Yelp from '../api/Yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState()
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item, index }) => {
            return (
              <ImageBackground source={{ uri: item }} style={styles.header}>
                <View style={styles.child}>
                  {index === 0 ?
                    <View>
                      <Text style={styles.headerText}>{result.name}</Text>
                      <View style={styles.infoBlock}>
                        <Text style={styles.info}>Price : {result.price}</Text>
                        <Text style={styles.info}>Rating : {result.rating}</Text>
                        <Text style={styles.info}>Phone : {result.phone}</Text>
                      </View>
                    </View>
                    : null}
                </View>
              </ImageBackground>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  container2: {
    borderRadius: 4
  },
  header: {
    height: 200,
    marginVertical: 1
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center'
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  info: {
    color: 'white'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 20
  }
})

export default ResultsShowScreen