const Header = () => {
  return (
    <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
      <h1>My Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-teal-800 p-2.5 rounded-lg">Profile</button>
        <button className="bg-teal-800 p-2.5 rounded-lg">Logout</button>
      </div>
    </header>
  );
};

export default Header;
