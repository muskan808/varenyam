import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

const OTP = () => {
    const [otp, setOtp] = useState('');
    const navigation = useNavigation();

    const handleVerifyOTP = () => {
        // Implement your logic for verifying the OTP
        // You can add validation checks here for the OTP

        // Example validation check
        if (otp.length !== 6) {
            alert('Please enter a valid OTP');
            return;
        }

        // Implement the OTP verification process here
        // For now, we are just logging the entered OTP
        console.log('Entered OTP: ', otp);
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10 }}>
                <ArrowLeftIcon width={30} height={30} color={themeColors.primary} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Enter OTP</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: themeColors.primary, padding: 10, width: 300, marginBottom: 20 }}
                    placeholder="Enter OTP"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={handleVerifyOTP} style={{ backgroundColor: themeColors.primary, padding: 10 }}>
                    <Text style={{ color: 'white' }}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OTP;