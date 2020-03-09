import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  image: {
    width: 190,
    height: 110,
    borderRadius: 4,
    marginBottom: 3
  },
  name: {
    fontWeight: 'bold'
  }
})

export default ResultsDetail