import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useRestaurant from '../hooks/useRestaurant'


const Restaurant = () => {
  const [{data, loading, error}, searchRestaurants] = useRestaurant()

  useEffect(() => {
    searchRestaurants()
  })

  console.log(data, loading, error)
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Top Restaurants</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,  
        marginVertical: 15,
        // flex: 1 
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    }
})

export default Restaurant
