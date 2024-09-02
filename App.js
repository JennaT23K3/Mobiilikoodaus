import {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [GivenAge, setAge] = useState('')
const [lower, lowerHeart] = useState(0)
const [higher, higherHeart] = useState(0)

const calculate = (text) => {
  const result1 = (220 - GivenAge.replace(',','.')) * 0.65
  const result2 = (220 - GivenAge.replace(',','.')) * 0.85
  lowerHeart(result1);
  higherHeart(result2);
}

return (
    <View style={styles.container}>
    <Text style={styles.field}>Age</Text>
    <TextInput
    style={styles.field}
    value={GivenAge}
    onChangeText={text=> setAge(text)}
    keyboardType='decimal-pad'
    />
    <Text style={styles.field}>Limits</Text>
    <Text style={styles.field}>{lower.toFixed(0)} - {higher.toFixed(0)} </Text>
    <Button title="Calculate" onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});
