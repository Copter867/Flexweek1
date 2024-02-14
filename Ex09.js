import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{flex:1,justifyContent:'space-around',
    flexDirection:'column'}}>
    <View style={{
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'flex-start',
           justifyContent: 'space-between'
           ,}}>
           <View style={{width: 100 ,height: 100,  backgroundColor: '#50E3C2'}} />
           <View style={{width: 100 ,height: 100,  backgroundColor: '#50E3C2'}} />
           <View style={{width: 100 ,height: 100,  backgroundColor: '#50E3C2'}} />
      </View>
    <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between'
          ,}}>
      <View style={{width: 100 ,height: 100,  backgroundColor: '#4A90E2'}} />
      <View style={{width: 100 ,height: 100, backgroundColor: '#4A90E2'}} />
      <View style={{width: 100 ,height: 100, backgroundColor: '#4A90E2'}} />
      </View>
    <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
          ,}}>
          <View style={{
      width: 100 ,height: 100,  backgroundColor: '#9013FE'}} />
          <View style={{
      width: 100 ,height: 100, backgroundColor: '#9013FE'}} />
          <View style={{
      width: 100 ,height: 100, backgroundColor: '#9013FE'}} />
      </View>
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
