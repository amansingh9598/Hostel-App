const HostelCard = ({ hostel }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{hostel.name}</h2>
      <p>Rent: ₹{hostel.rent}</p>
      <p>Facilities:{hostel.facilities}</p>
      <p>Location:{hostel.location}</p>
      <p>Contact:{hostel.contact}</p>
      <p className="text-sm text-gray-500">Uploaded on:{hostel.createdAt}</p>
    </div>
  );
};

export default HostelCard;
