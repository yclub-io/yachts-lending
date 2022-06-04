const Button = ({ children, ...rest }) => {
    return (
      <button
        {...rest}
        className="py-3 px-12 text-black-2  bg-black-1 border-pink-1 border rounded-full hover:bg-orange-2 transition-all duration-700 disabled:bg-opacity-5 font-Roboto antialiased"
      >
        {children}
      </button>
    );
  };
  
  export default Button;