import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,Alert,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
} from "@/utils/signupValidation";


export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[showPassword,setShowPassword]=useState(false);
  const[showConfirmPassword,setShowConfirmPassword]=useState(false);

  const handleSignUp = async () => {
  const nameCheck = validateName(name);
  const emailCheck = validateEmail(email);
  const phoneCheck = validatePhone(phone);
  const passwordCheck = validatePassword(password);

  if (!nameCheck.valid) return alert(nameCheck.message);
  if (!emailCheck.valid) return alert(emailCheck.message);
  if (!phoneCheck.valid) return alert(phoneCheck.message);
  if (!passwordCheck.valid) return alert(passwordCheck.message);

  if (password !== confirmPassword) {
    return alert("Passwords do not match");
  }

  // backend call here
  // API CALL
    try {
      const res = await fetch("http://10.113.71.177:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return Alert.alert(data.message || "Signup failed");
      }

      Alert.alert("Success", "Account created");

      router.replace("/sign-in");
    } catch (error) {
      console.log(error);
      Alert.alert("Server error");
    }
  };

  return (
    <SafeAreaView  className="flex-1">
      <KeyboardAvoidingView behavior="padding">
      <ScrollView contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
        <View className="flex justify-center items-center  m-2">
               <LinearGradient colors={["#2E86DE", "#A9CCE3"]}   style={{
       width: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20, // optional
      
    }}>
          <Image
            source={assets.frontimage}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          ></Image>
          </LinearGradient>

          <View>
            <View className="flex flex-row gap-3 items-center justify-center mt-8 mb-2">
              <Text className="text-gray-800 font-bold text-4xl">Create</Text>
              <Text className="text-blue-600 font-bold text-4xl">Account</Text>
            </View>
            <Text className="text-gray-600 text-lg font-semibold  text-center">
              Sign up to get started with Soun Tabeeb
            </Text>

            <View className="flex-row items-center justify-center gap-2 px-2 m-4">
              <View className="flex-1 h-[2px] bg-blue-600" />
              <Ionicons name="heart" size={24} color={"#2563EB"} />
              <View className="flex-1 h-[2px] bg-blue-600" />
            </View>

           
            <Text className="text-gray-600 text-lg font-bold">Full Name</Text>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor={"#4B5563"}
              value={name}
              onChangeText={setName}
              className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
            <Text className="text-gray-600 text-lg font-bold">Email Address</Text>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={"#4B5563"}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
            <Text className="text-gray-600 text-lg font-bold">Phone Number</Text>
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={"#4B5563"}
              value={phone}
              onChangeText={setPhone}
            keyboardType="phone-pad"
              maxLength={10}
              className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
            <Text className="text-gray-600 text-lg font-bold">Password</Text>
            <View className="flex flex-row items-center justify-between border border-gray-400 px-4 rounded-lg mb-4">
            <TextInput
              placeholder="Create a password"
              placeholderTextColor={"#4B5563"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              // className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
             <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                      <Ionicons name={showPassword?"eye-outline":"eye-off-outline"} size={24} color={"gray"}></Ionicons>

            </TouchableOpacity>
            </View>

            <Text className="text-gray-600 text-lg font-bold">Confirm Password</Text>
            <View className="flex flex-row items-center justify-between border border-gray-400 px-4 rounded-lg mb-4">
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor={"#4B5563"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
               secureTextEntry={!showConfirmPassword}
              // className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
             <TouchableOpacity onPress={()=>setShowConfirmPassword(!showConfirmPassword)}>
                      <Ionicons name={showConfirmPassword?"eye-outline":"eye-off-outline"} size={24} color={"gray"}></Ionicons>

            </TouchableOpacity>
            </View>

              <TouchableOpacity
            onPress={handleSignUp}
            className="border rounded-lg bg-blue-600 flex flex-row items-center  justify-between p-2 my-4 "
          >
            <Ionicons className="person" size={24} color={"#fff"}></Ionicons>
            <Text className="text-white text-lg font-semibold text-center">
              Sign Up
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#fff"}
            ></Ionicons>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center gap-2 px-2 m-4">
            <View className="flex-1 h-[1px] bg-gray-600" />
            <Text className="text-gray-600 font-bold">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-600" />
          </View>

          {/* <TouchableOpacity
            onPress={() => router.push("/home")}
            className="border rounded-lg bg-[#fff] flex flex-row items-center  justify-between p-2 my-4"
          >
            <Ionicons name="logo-google" size={24} color="green"></Ionicons>
            <Text className="text-blue-600 text-lg font-semibold text-center">
              Continue with Google
            </Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={"#fff"}
            ></Ionicons>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="flex flex-row items-center  gap-3"
          >
            <Text className="text-gray-600 font-semibold text-lg">
              Already a User?
            </Text>
            <Text className="text-blue-600 text-xl font-bold">Sign In</Text>
          </TouchableOpacity>
             


          </View>
        </View>
        
         
        
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// import {View,Text,Image,ScrollView,Pressable, TextInput, TouchableOpacity} from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// export default  function SignIn()
// {
//   const router = useRouter();

//   const handleLogin = () => {
//     // after authentication success:
//     router.replace("/(tabs)");
//   };
//     const [email, setEmail] = useState("");
//     const[password,setPassword]=useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     return(
//         <View  className="p-6 mt-20">
//             <View className="border bg-white rounded-lg gap-3 py-12 px-6" >

//                  <Text className="text-gray-600 text-2xl font-bold ">Login</Text>
//                  <Text className="text-gray=600 text-lg">Please log in to book an appointment</Text>
//                  <Text className="text-gray-600 text-lg font-bold">Email</Text>
//                  <TextInput
//                  placeholder="Enter your Email"
//                  value={email}
//                  onChangeText={setEmail}
//                  className="border border-gray-300 px-4 py-3 rounded-lg mb-4"
//                  />
//                 <Text className="text-gray-600 text-lg font-bold">Password</Text>
//                    <View className="border border-gray-300 rounded-lg flex-row justify-between items-center px-4">
//                  <TextInput
//                  placeholder="Enter your password"
//                  value={password}
//                  onChangeText={setPassword}
//                    secureTextEntry={!showPassword}
//                 //  className="border border-gray-300 px-5 py-3 rounded-lg mb-4"
//                  />
//                   <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//           <Ionicons
//             name={showPassword ? "eye" : "eye-off"}
//             size={22}
//             color="gray"
//           />
//         </TouchableOpacity>
//         </View>
//                  {/* adding button */}
//                  <TouchableOpacity  onPress={handleLogin} className="bg-blue-600 px-2 py-3 mt-4 rounded-full">
//                     <Text className="text-white text-lg text-center">Login</Text>
//                  </TouchableOpacity>

//                  {/*  */}
//                  <View className="flex-row gap-2 items-center">
//                     <Text>Create a new account?</Text>
//                  <TouchableOpacity onPress={()=>router.push('/sign-up')}>
//                  <Text className="text-blue-600 text-lg font-semibold">Press here</Text>
//                  </TouchableOpacity>
//                  </View>

//             </View>

//         </View>

//     )
// }
