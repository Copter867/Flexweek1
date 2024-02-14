import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex05() {
  return (
    <View style={{
      flex: 1,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center',
           }}>
           <View style={{
      width: 100 ,height: 100,  
      backgroundColor: '#50E3C2'}} />
           <View style={{
      width: 100 ,height: 100, 
      backgroundColor: '#4A90E2'}} />
           <View style={{
      width: 100 ,height: 100, 
      backgroundColor: '#9013FE'}} />
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
