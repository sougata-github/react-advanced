const Content = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 ml-[10rem]">
      <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
      <p className="mt-4">Here are your stats.</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg">Total Users</h3>
          <p className="text-xl font-semibold">1,246</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg">Revenue</h3>
          <p className="text-xl font-semibold">$100K</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
