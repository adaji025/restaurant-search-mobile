import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <CategoryItem name='burger' imageUrl={require("./src/assets/images/burger.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
  },
});
