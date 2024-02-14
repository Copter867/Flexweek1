import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex02() {
  return (
    <View style={{
      flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-start',
           alignItems: 'stretch',
           }}>
           <View style={{
      width:100 ,  
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
