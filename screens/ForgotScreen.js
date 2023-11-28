import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'

const ForgotScreen = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const navigation = useNavigation();

    const handleSendOTP = () => {
        if (!email && !mobile) {
            Alert.alert('Error', 'Please fill your email or mobile number');
        } else {
            console.log('Sending OTP to: ', email || mobile);
        }
    };

    return (
        <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
        <SafeAreaView  className="flex ">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()} 
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <View  className="flex-row justify-center">
            <Image source={require('../assets/images/login.png')} 
            style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView><Text className=""></Text>
        <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8"><Text className=""></Text>
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Enter Email'
            />
           <Text className="font-bold text-center">Or</Text>
            <Text className="text-gray-700 ml-4">Mobile no.</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value={mobile}
            onChangeText={(number) => setMobile(number)}
            placeholder='Enter Mobile No.'
            />
           <Text className=""></Text>
            <TouchableOpacity 
              className="py-3 bg-yellow-400 rounded-xl" onPress={handleSendOTP}>
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Send OTP
                </Text>
             </TouchableOpacity>
            
          </View>
        </View>
        </View>
    );
};

export default ForgotScreen;
