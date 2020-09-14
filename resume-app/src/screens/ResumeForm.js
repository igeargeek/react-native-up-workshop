import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import ValidationComponent from 'react-native-form-validator'

export default class ResumeForm extends ValidationComponent {
  state = {
    fullName: '',
    nickname: '',
    age: '',
    skill: ''
  }

  _onSubmit = () => {
    this.validate({
      fullName: { minlength: 3, maxlength: 7, required: true },
      nickname: { email: true },
      // number: {numbers: true},
      // date: {date: 'YYYY-MM-DD'}
    });
  }

  render() {
    return (
      <View style={{ padding: 30, backgroundColor: 'white', minHeight: '100%' }}>
        <Text>
          {this.getErrorMessages()}
        </Text>
        <View>
          <Text>Full Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ fullName: text })}
            value={this.state.fullName}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Nickname</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ nickname: text })}
            value={this.state.nickname}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Age</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ age: text })}
            value={this.state.age}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Skill</Text>
          <TextInput
            style={styles.textAreaInput}
            onChangeText={text => this.setState({ skill: text })}
            value={this.state.skill}
            multiline={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={this._onSubmit}
            title="Save"
          />
        </View>
      </View>
    )
  }
}


// const ResumeForm = () => {
//   const [fullName, setFullName] = useState('')
//   const [nickname, setNickname] = useState('')
//   const [age, setAge] = useState('')
//   const [skill, setSkill] = useState('')

//   const onSubmit = () => {
//     alert('fullName', fullName)
//   }

//   return (
//     <View style={{ padding: 30, backgroundColor: 'white', minHeight: '100%' }}>
//       <View>
//         <Text>Full Name</Text>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={text => setFullName(text)}
//           value={fullName}
//         />
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <Text>Nickname</Text>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={text => setNickname(text)}
//           value={nickname}
//         />
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <Text>Age</Text>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={text => setAge(text)}
//           value={age}
//         />
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <Text>Skill</Text>
//         <TextInput
//           style={styles.textAreaInput}
//           onChangeText={text => setSkill(text)}
//           value={skill}
//           multiline={true}
//         />
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <Button
//           onPress={onSubmit}
//           title="Save"
//         />
//       </View>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  textAreaInput: { height: 100, borderColor: 'gray', borderWidth: 1 }
})

// export default ResumeForm