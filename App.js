import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 25
  },
});
