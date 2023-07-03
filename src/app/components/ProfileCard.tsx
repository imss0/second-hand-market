const ProfileCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden group">
      <div className="bg-blue-500 p-6 pb-14">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="rounded-3xl p-6 relative -top-5 bg-white">
        <div className="flex relative -top-16 items-end justify-between">
          <div className="flex flex-col items-center">
            <span className=" text-gray-400 text-sm">Orders</span>
            <span className="font-medium">34</span>
          </div>
          <div className="h-24 w-24 bg-slate-400 rounded-full group-hover:bg-red-400" />
          <div className="flex flex-col items-center">
            <span className=" text-gray-400 text-sm">Spent</span>
            <span className="font-medium">£900</span>
          </div>
        </div>
        <div className="-mt-10 -mb-5 flex flex-col items-center relative">
          <span className="text-lg font-medium">Sohyun Lim</span>
          <span className="text-sm text-gray-400">London, United Kingdom</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
