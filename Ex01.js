import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex01() {
  return (
    <View style={{
      flex: 1,
           flexDirection: 'column',
           justifyContent: 'flex-start',
           alignItems: 'stretch',
           }}>
           <View style={{
      height :100 ,  
      backgroundColor: '#50E3C2'}} />
      </View>
      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
