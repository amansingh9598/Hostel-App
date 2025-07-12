const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <h1 className="text-white text-2xl font-bold">HostelMate</h1>
      <div className="flex gap-4">
        <a href="/" className="text-white">Home</a>
        <a href="/upload" className="text-white">Upload</a>
        <a href="/about" className="text-white">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
