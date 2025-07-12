import Navbar from "../components/Navbar";

const About = ()=>{
    return(
        <div>
            <Navbar />
            <h1 className="text-3xl text-center my-4">About Us</h1>
            <div className="max-w-md mx-auto space-y-4">
                <p>
                Welcome to <b>HostelMate </b>, a smart hostel listing platform designed to help students and working professionals easily find suitable accommodations.
                Built using modern web technologies like React, Vite, and HostelMate allows users to browse available hostels with real-time details like rent,
                facilities, location, and contact information. Our goal is to simplify the hostel-hunting process by offering a clean, user-friendly interface and features like instant uploads,
                smart recommendations, and real-time chatbot assistance. HostelMate is currently in prototype phase, storing data temporarily without a backend — perfect for fast testing and community feedback.
                </p>
            </div>
        </div>
    );
}

export default About;