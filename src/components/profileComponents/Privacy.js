import { 
    StyleSheet, 
    Text,
    SafeAreaView, 
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { profiles } from '../../data/Profile'
import { Feather } from '@expo/vector-icons';

const Privacy = ({ index, navigation }) => {
    const { 
        background,
        text,
        date,
        body,
        title,
        list,
        accept,
        acceptText,
    } = styles

    const bankName = 'Ted\'s Bank'

    return (
        <SafeAreaView style={background}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={text} >Privacy Policy</Text>
                <Text style={date} >May 20, 2023 </Text>
                <Text style={body} >
                    This Privacy Policy describes how {bankName} 
                    ("we," "us," or "our") collects, uses, discloses, 
                    and safeguards the personal information of users 
                    ("you" or "users") of our banking mobile 
                    application ("{bankName} App"). Protecting your 
                    privacy is of utmost importance to us, and we are 
                    committed to ensuring the security and 
                    confidentiality of your personal information. 
                    Please read this Privacy Policy carefully to 
                    understand our practices regarding your information.
                </Text>
                <Text style={title} > 1. Information We Collect: </Text>
                <Text style={body} >
                    a. Personal Information: When you use the {bankName} 
                    App, we may collect personal information, including 
                    but not limited to:
                </Text>
                <Text style={list} >
                    Full name {"\n"}
                    Contact information {"\n"}
                    Date of birth {"\n"}
                    Residential address {"\n"}
                    National identification number {"\n"}
                    Financial information {"\n"}
                    Employment information {"\n"}
                    Biometric data for authentication purposes {"\n"}
                    Transaction details and history {"\n"}
                    Other information you provide to us voluntarily. {"\n"}
                </Text>
                <Text style={body} >
                    b. Device Information: We may automatically collect 
                    certain information about your mobile device, such as 
                    your device type, operating system, IP address, and 
                    mobile network information. This information is used 
                    for analytical purposes, enhancing security, and 
                    improving our services.
                </Text>
                <Text style={title} > 2. Use of Information: </Text>
                <Text style={body} >
                    a. Provide and Improve Services: We use the collected 
                    information to provide and improve our banking 
                    services, process transactions, authenticate users, 
                    communicate with you, and offer personalized 
                    experiences tailored to your needs.
                </Text>
                <Text style={body} >
                    b. Security and Fraud Prevention: Your personal 
                    information helps us identify and prevent fraud, 
                    unauthorized access, and other illegal activities. 
                    We may also use your information to verify your 
                    identity and comply with legal obligations.
                </Text>
                <Text style={body} >
                    c. Customer Support: We may use your information to 
                    respond to your inquiries, provide customer support, 
                    and address any issues you may encounter while using 
                    the {bankName} App.
                </Text>
                <Text style={body} >
                    d. Legal Compliance: We may process your information 
                    to comply with applicable laws, regulations, and legal 
                    obligations, including reporting to regulatory and 
                    government authorities as required.
                </Text>
                <Text style={body} >
                    e. Aggregated Data: We may aggregate and anonymize your 
                    information to create statistical or demographic data. 
                    This aggregated data does not identify you personally 
                    and may be used for various purposes, such as research, 
                    analytics, or marketing.
                </Text>
                <Text style={title} > 3. Information Sharing: </Text>
                <Text style={body} >
                    a. Service Providers: We may share your information with 
                    trusted third-party service providers who assist us in 
                    delivering and improving our services. These service 
                    providers are bound by strict confidentiality and data 
                    protection obligations.
                </Text>
                <Text style={body} >
                    b. Business Transfers: In the event of a merger, 
                    acquisition, or sale of our assets, your personal 
                    information may be transferred as part of the transaction. 
                    We will take appropriate steps to ensure the 
                    confidentiality and security of your information during 
                    such transfers.
                </Text>
                <Text style={body} >
                    c. Legal Requirements: We may disclose your information 
                    if required by law, regulation, legal process, or 
                    government request. We will also disclose information to 
                    protect our rights, privacy, safety, or property, or that 
                    of our users or others.
                </Text>
                <Text style={title} > 4. Data Security: </Text>
                <Text style={body} >
                    We implement industry-standard security measures to protect 
                    your personal information from unauthorized access, 
                    disclosure, alteration, or destruction. These measures 
                    include but are not limited to encryption, firewalls, access 
                    controls, and regular security assessments. However, please 
                    note that no method of transmission over the internet or 
                    electronic storage is 100% secure, and we cannot guarantee 
                    absolute security.
                </Text>
                <Text style={title} > 5. Your Rights: </Text>
                <Text style={body} >
                    You have certain rights regarding your personal information, 
                    including the right to access, update, correct, or delete 
                    your information. If you wish to exercise any of these rights, 
                    please contact us using the contact details provided in 
                    Section 7.
                </Text>
                <Text style={title} > 6. Children's Privacy: </Text>
                <Text style={body} >
                    The {bankName} App is not intended for use by children under
                    the age of 13. We do not knowingly collect personal information
                    from children under the age of 13. If you are under 13, please
                    do not provide any information on the {bankName} App.
                </Text>
                <Text style={title} > 7. Contact Us: </Text>
                <Text style={body} >
                    If you have any questions or concerns about this Privacy Policy,
                    please contact us at:
                </Text>
                <Text style={body} >
                    {bankName} {"\n"}
                    123 Main Street {"\n"}
                    New York, NY 10001 {"\n"}
                    (123) 456-7890
                </Text>
                <Text style={title} > 8. Changes to this Privacy Policy: </Text>
                <Text style={body} >
                    We may update this Privacy Policy from time to time.
                    Any changes will be posted on this page with an updated
                    revision date. We encourage you to review this Privacy
                    Policy periodically for any updates or changes. 
                    {"\n"}
                    {"\n"}
                    By using the {bankName} App, you acknowledge that you 
                    have read and understood this Privacy Policy and agree to 
                    the collection, use, and disclosure of your personal 
                    information as described herein.
                </Text>
                <TouchableOpacity style={accept} onPress={() => navigation.navigate('ProfileMenu')}>
                    <Text style={acceptText} > Accept </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Privacy

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background,
        flex: 1,
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: colors.text,
    },
    date: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: colors.text,
    },
    body: {
        fontSize: 15,
        marginHorizontal: 20,
        marginTop: 20,
        color: colors.text,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 30,
        color: colors.text,
    },
    list: {
        fontSize: 15,
        marginHorizontal: 20,
        marginLeft: 40,
        marginTop: 20,
        color: colors.text,
        lineHeight: 22,
    },
    accept: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: 150,
        height: 50,
        padding: 5,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    acceptText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
    },
})