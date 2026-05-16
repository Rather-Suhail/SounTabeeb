


// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { assets } from "@/assets/assets";
// import { LinearGradient } from "expo-linear-gradient";
// import { useState } from "react";
// import { useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import  SearchBar from "@/components/SearchBar";
// const { width } = Dimensions.get("window");
// export default function Header() {
//   const router = useRouter();
//   const [userDetail, setUserDetail] = useState({
//     name: "Rather Suhail",
//     image: assets.profile_pic,
//     email: "saleemrather3700@gmail.com",
//     phone: "7051141199",
//     address: "srinagar jammu and kashmir",
//     gender: "Male",
//     dob: "24-03-2001",
//   });


//   return (
//     <SafeAreaView className=" flex-1 px-4">
//       <ScrollView className="bg-blue-400 ">
//         <View className=" p-4 flex flex-row items-center justify-between gap-64">
//           <TouchableOpacity>
//             <Ionicons name="menu" size={30} color={"#fff"} />
//           </TouchableOpacity>
//           <Ionicons name="notifications" size={30} color={"#fff"} />
//         </View>

//         <View className="flex flex-row items-center justify-between ">
//           <View className="flex flex-row items-center">
//             <TouchableOpacity onPress={() => router.push("/(tabs)/profile")}>
//               <Image
//                 source={userDetail.image}
//                 className="w-16 h-16 rounded-full"
//               ></Image>
//             </TouchableOpacity>
//             <View>
//               <Text className="text-xl font-bold text-white">Welcome back</Text>
//               <Text className="text-xl font-bold text-white">
//                 {userDetail.name}
//               </Text>
//               <Text className="text-xl font-bold text-white">
//                 Your Health is our priority
//               </Text>
//             </View>
//           </View>
//           <View>
//             <Image
//               source={assets.header_img}
//               resizeMode="cover"
//               className="w-32 h-32"
//             />
//           </View>
//         </View>
  

//        <SearchBar></SearchBar>
       
//       </ScrollView>
//       </SafeAreaView>
//         );
// }

      //  {/* <View className=" absolute  bottom-0  left-4 bg-white flex-row items-center px-4 py-3 /
    //         placeholder="Search doctors..."
    //         className="flex-1 ml-2"
    //         value={search}
    //         onChangeText={setSearch}
    //       />

    //       <Ionicons name="options" size={22} color="#2563EB" />
    //     </View>

    // {/* SEARCH RESULTS */}
    // {/* <View className="mt-4 px-4">
      // {filteredDoctors.map((doctor) => (
      //   <View
      //     key={doctor.id}
      //     className="bg-white p-4 mb-3 rounded-2xl shadow"
      //   >
      //     <Text className="text-lg font-bold">
      //       {doctor.name}
      //     </Text>
      //   </View>
      // ))}
    // </View> */} */}
    // </SafeAreaView>

    // <ScrollView className="py-8 px-8 ">

    //   <View className="relative">
    //     <LinearGradient
    //       colors={["#2E86DE", "#A9CCE3"]}
    //       style={{
    //         width: "100%",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         borderRadius: 20, // optional
    //       }}
    //     >
    //       <Image
    //         source={assets.frontimage}
    //         className="w-full h-96"
    //         resizeMode="contain"
    //       ></Image>
    //     </LinearGradient>

    //   </View>
    //   <View className="absolute p-4 flex flex-row items-center justify-between gap-64">
    //   <TouchableOpacity>
    //         <Ionicons name="menu" size={30} color={"#fff"} />
    //       </TouchableOpacity>
    //       <Ionicons name="notifications" size={30} color={"#fff"}/>
    //   </View>

    //   <View className="absolute bottom-8 left-4 ">

    //     <View className="flex flex-row items-center justify-center gap-4">

    //         <TouchableOpacity onPress={()=>router.push("/profile")}>
    //         <Image source={userDetail.image} className="w-20 h-20 rounded-full" resizeMode="contain"></Image>
    //         </TouchableOpacity>

    //     <View>

    //     <Text className="text-xl font-bold text-white">Welcome back</Text>
    //     <Text className="text-xl font-bold text-white">{userDetail.name}</Text>
    //     <Text className="text-xl font-bold text-white">Your Health is our priority></Text>
    //     </View>

    //        </View>

    //   </View>
    //   <View className="absolute inset-0 bg-black/60"></View>
    // </ScrollView>
//   );
// }
import { View,Text,Image } from "react-native";
import { assets } from "@/assets/assets";
import DropdownMenu from "./DropdownMenu";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import {useUser} from "@/context/UserContext";
export default function Header()
{
  const { profileImage } = useUser();
  return(
    <View>
      <View className="flex flex-row items-center ">
        <DropdownMenu></DropdownMenu>
        <Ionicons name="notifications-outline" size={28} color="black"></Ionicons>
      </View>
      <SearchBar></SearchBar>

   
    </View>
  )
}