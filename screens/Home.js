import { View, Text ,SafeAreaView,ScrollView} from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/home/SearchBar'
import HeaderTabs from '../components/home/HeaderTabs'
import Categories from '../components/home/Categories'
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs  />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  )
}