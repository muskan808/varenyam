import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleChangePassword = () => {
        // Implement your logic for changing or creating the password
        // You can add validation checks here for the password and confirm password fields

        // Example validation check
        if (password.length < 6) {
            Alert.alert('Error', 'Password should be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        // Implement the password change or creation process here
        // For now, we are just logging the entered password
        console.log('New password: ', password);
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10 }}>
                <ArrowLeftIcon width={30} height={30} color={themeColors.primary} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Change Password</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: themeColors.primary, padding: 10, width: 300, marginBottom: 20 }}
                    placeholder="Enter new password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <TextInput
                    style={{ borderWidth: 1, borderColor: themeColors.primary, padding: 10, width: 300, marginBottom: 20 }}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={handleChangePassword} style={{ backgroundColor: themeColors.primary, padding: 10 }}>
                    <Text style={{ color: 'white' }}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;
