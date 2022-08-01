import { Text, View, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.grab}>Grab Your</Text>
        <Text style={styles.delicious}>Delicious Meal!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 25,
  },

  grab: {
    fontSize: 35
  },
  
  delicious: {
    fontSize: 40,
    fontWeight: '700',
  }
})

export default Header