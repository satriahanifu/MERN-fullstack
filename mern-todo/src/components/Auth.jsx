const Auth = (props) => {
  return (
    <button
      className="w-[381px] h-[44px] inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-[#1571DE] shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      type="submit"
    >
      {props.title}
    </button>
  );
};

export default Auth;
