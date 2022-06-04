const Button = ({ children, ...rest }) => {
  return ( 
   
    <button
    {...rest}
    style={{background:"radial-gradient(#000000,#000000,#000000,#F5129C"}}
    className="absolute z-40 text-white-1 border border-pink-1 py-3 px-12 rounded-full font-Grotesk text-base shadow-btnGlow hover:shadow-btnGlowHover font-medium tracking-wider transition-all duration-700 hover:py-4 hover:px-14"> 
    {children}
    </button>
   );
}

export default Button;