
import HostelCard from "../components/HostelCard";
import Navbar from "../components/Navbar";
import hostelData from '../data/hostels';

const Home = () => {

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center my-4">Available Hostels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {hostelData.map((hostel, index) => (
        <HostelCard key={index} hostel={hostel} />
      ))}
      </div>
    </div>
  );
};

export default Home;
