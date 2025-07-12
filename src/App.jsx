import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import { useState } from "react";
import About from "./pages/About";

function App() {
  const [hostels, setHostels] = useState([{
    name:"Sunrise Hostel",
    rent:"4500",
    facilities:"Wifi, AC, Mess, Laundry",
    location:"Near ABC College, Lucknow",
    contactAt:new Date().toISOString().split("T")[0]
  },
  {
    name: "Sunrise Hostel",
    rent: 4500,
    facilities: "WiFi, AC, Mess, Laundry",
    location: "Near ABC College, Lucknow",
    contact: "9876543210"
  },
  {
    name: "GreenNest PG",
    rent: 4000,
    facilities: "WiFi, Geyser, 24x7 Water",
    location: "Hazratganj, Lucknow",
    contact: "8844552211"
  },
  {
    name: "Metro Boys Hostel",
    rent: 5200,
    facilities: "AC Rooms, CCTV, Parking",
    location: "Alambagh, Lucknow",
    contact: "9123456780"
  },
  {
    name: "Shanti PG",
    rent: 3800,
    facilities: "Shared Room, Fan, Food",
    location: "Near Charbagh Railway Station",
    contact: "7001122334"
  },
  {
    name: "HostelOne",
    rent: 5000,
    facilities: "Single Room, WiFi, Mess",
    location: "Aashiyana, Lucknow",
    contact: "9988776655"
  },
  {
    name: "Elite Girls Hostel",
    rent: 6000,
    facilities: "AC, CCTV, Food, Study Room",
    location: "Near Lucknow University",
    contact: "9001234567"
  },
  {
    name: "SafeStay PG",
    rent: 4700,
    facilities: "WiFi, 3 Meals, Parking",
    location: "Gomti Nagar, Lucknow",
    contact: "7998877665"
  },
  {
    name: "CityHost PG",
    rent: 4100,
    facilities: "Laundry, Shared Room, Fan",
    location: "Indira Nagar, Lucknow",
    contact: "8300554433"
  },
  {
    name: "CareHome Hostel",
    rent: 5300,
    facilities: "WiFi, Hot Water, Security",
    location: "Vikas Nagar, Lucknow",
    contact: "9090901234"
  },
  {
    name: "Comfort PG",
    rent: 3900,
    facilities: "2 Sharing, WiFi, Food",
    location: "Krishna Nagar, Lucknow",
    contact: "8796543210"
  },
  {
    name: "Royal Stay PG",
    rent: 4800,
    facilities: "WiFi, Single Bed, 24x7 Security",
    location: "Rajajipuram, Lucknow",
    contact: "9811122233"
  },
  {
    name: "Lakeview Hostel",
    rent: 5500,
    facilities: "AC Rooms, Food, WiFi",
    location: "Gomti Nagar Extension, Lucknow",
    contact: "9823456789"
  },
  {
    name: "Pearl PG for Girls",
    rent: 5100,
    facilities: "2 Meals, CCTV, Geyser, Wardrobe",
    location: "Jankipuram, Lucknow",
    contact: "9912345678"
  },
  {
    name: "Student Inn",
    rent: 4200,
    facilities: "Shared Room, Mess, Power Backup",
    location: "Aliganj, Lucknow",
    contact: "9787654321"
  },
  {
    name: "YouthStay Hostel",
    rent: 4600,
    facilities: "WiFi, Parking, Filtered Water",
    location: "Chinhat, Lucknow",
    contact: "9701234567"
  },
  {
    name: "BrightNest PG",
    rent: 5000,
    facilities: "3 Meals, Shared Room, Laundry",
    location: "Ashiyana Sector L, Lucknow",
    contact: "9696969696"
  },
  {
    name: "Urban PG",
    rent: 4900,
    facilities: "WiFi, 24x7 Power, Study Table",
    location: "Kapoorthala, Lucknow",
    contact: "9677889900"
  },
  {
    name: "NextGen Hostel",
    rent: 5300,
    facilities: "AC, Smart Lockers, Biometric Entry",
    location: "Vibhuti Khand, Lucknow",
    contact: "9555111222"
  },
  {
    name: "The Safe Roof",
    rent: 4700,
    facilities: "CCTV, Water Purifier, WiFi",
    location: "Mahanagar, Lucknow",
    contact: "9440011223"
  },
  {
    name: "Om Sai PG",
    rent: 3900,
    facilities: "Fan, Geyser, 2 Meals, WiFi",
    location: "Rajendra Nagar, Lucknow",
    contact: "9335566778"
  }
]);

  return (
    
      <Routes>
        <Route path="/" element={<Home hostels={hostels}/>} />
        <Route path="/upload" element={<Upload setHostels={setHostels}/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    
  );
}

export default App;

