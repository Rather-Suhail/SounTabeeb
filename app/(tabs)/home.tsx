import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Speciality } from "@/components/Speciality";
import { TopDoctors } from "@/components/TopDoctors";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* <DropdownMenu></DropdownMenu> */}
        {/* <SearchBar></SearchBar> */}
        <Header></Header>
        <Banner></Banner>

        <Speciality></Speciality>
        <TouchableOpacity
          className="px-8 "
          onPress={() => router.push("/alldoctors")}
        >
          <Text className="text-4xl font-bold text-center">All Doctors</Text>
        </TouchableOpacity>
        <TopDoctors></TopDoctors>
        <Footer></Footer>
      </ScrollView>
    </SafeAreaView>
  );
}
