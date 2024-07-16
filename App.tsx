import { View, Text, StyleSheet, ScrollView, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomBanner from './components/Banner/CustomBanner';
import CustomInfoBlock from './components/Block/CustomInfoBlock';
import CustomTextInput from './components/TextInput/CustomTextInput';
import CustomCourseBlock from './components/Block/CustomCourseBlock';
import CustomButton from './components/Button/CustomButton';
import { CustomTheme, useTheme } from './components/Theme/CustomTheme';

const App = () => {
 
  return (
      <View style={[styles.container]}>
      <CustomTheme>
        <BodyApp />
      </CustomTheme>
        
      </View>
   
  );
};

const BodyApp = () => {
  const [hoTen, sethoTen] = useState('')
  const [email, setemail] = useState('')
  const [soDienThoai, setsoDienThoai] = useState('')
  const [tenKhoaHoc, settenKhoaHoc] = useState('')
  const [thoiGian, setthoiGian] = useState('')
  const [giaTien, setgiaTien] = useState('')
  // sử dụng hook để thao tác với theme
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.khung, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <CustomBanner source="data:image/jpeg;base64,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" />
        </View>
        <View>
          <CustomCourseBlock title='Thông tin khóa học' >
            <CustomTextInput onChangeText={settenKhoaHoc}
              placeholder='Nhập tên khóa học'
            />
            
            <CustomTextInput onChangeText={setgiaTien}
              placeholder='Nhập giá tiền'
              keyboardType='phone-pad'
            />
             <CustomTextInput onChangeText={sethoTen}
              placeholder='Nhập Họ tên'
            />
            
            <CustomTextInput onChangeText={setsoDienThoai}
              placeholder='Nhập số điện thoại'
              keyboardType='phone-pad'
            />
          </CustomCourseBlock>
         
          <CustomButton>
            <Text style={{ color: 'white' }}>Đăng ký</Text>
          </CustomButton>
        </View>
        <Pressable style={styles.button} onPress={toggleTheme}>
          <Text style={{ color: 'white' }}>Đổi giao diện</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  khung: {
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: '#000',
  },
  button: {
    width: '90%',
    height: 46,
    margin: 20,
    backgroundColor: '#49A5B8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    marginBottom: 16,
  }
});
