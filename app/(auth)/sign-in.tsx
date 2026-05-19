import { assets } from "@/assets/assets";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[showPassword,setShowPassword]=useState(false);
//   const handleLogin = async () => {
//     const emailCheck = validateEmail(email);
//   const passwordCheck = validatePassword(password);

//   if (!emailCheck.valid) {
//     return Alert.alert(emailCheck.message);
//   }

//   if (!passwordCheck.valid) {
//     return Alert.alert(passwordCheck.message);
//   }

//   // API CALL
//   try {
//     const res = await fetch("http://10.113.71.177:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       return Alert.alert(data.message);
//     }

//     Alert.alert("Success", "Login successful");

//     // go to home
//     router.replace("/home");

//   } catch (error) {
//     Alert.alert("Server error");
//   }
// };
  return (
    <SafeAreaView  className="flex-1">
      <KeyboardAvoidingView  style={{ flex: 1 }} behavior="height">
         {/* behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
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
              <Text className="text-gray-800 font-bold text-4xl">Welcome</Text>
              <Text className="text-blue-600 font-bold text-4xl">Back</Text>
            </View>
            <Text className="text-gray-600 text-lg font-semibold  text-center">
              Sign in to continue to Soun Tabeeb
            </Text>

            <View className="flex-row items-center justify-center gap-2 px-2 m-4">
              <View className="flex-1 h-[1px] bg-gray-600" />
              <Ionicons name="heart" size={24} color={"#2563EB"} />
              <View className="flex-1 h-[1px] bg-gray-600" />
            </View>

            
            {/* <Text className="text-gray-600 text-lg font-bold">Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={"#4B5563"}
              value={name}
              onChangeText={setName}
              className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            /> */}
            <Text className="text-gray-600 text-lg font-bold">Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={"#4B5563"}
              value={email}
              onChangeText={setEmail}
              className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
            <Text className="text-gray-600 text-lg font-bold">Password</Text>

            <View className="flex flex-row items-center justify-between border border-gray-400 px-4 rounded-lg mb-4">
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={"#000000"}
              value={password}
              onChangeText={setPassword}
                secureTextEntry={!showPassword}
              // className="border border-gray-400 px-4 py-3 rounded-lg mb-4"
            />
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                      <Ionicons name={showPassword?"eye-outline":"eye-off-outline"} size={24} color={"gray"}></Ionicons>

            </TouchableOpacity>
    
            </View>

              <TouchableOpacity
            onPress={handleLogin}
            className="border rounded-lg bg-blue-600 flex flex-row items-center  justify-between p-2 my-4 ">
            <Ionicons name="person" size={24} color={"#fff"}></Ionicons>
            <Text className="text-white text-lg font-semibold text-center">
              Sign In
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
            <Ionicons name="logo-google" size={24} color="#DB4437"></Ionicons>
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
            onPress={() => router.push("/sign-up")}
            className="flex flex-row items-center  gap-2"
          >
            <Text className="text-gray-600 font-semibold text-lg">
              Don't have an account?
            </Text>
            <Text className="text-blue-600 text-xl font-bold">Sign Up</Text>
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
