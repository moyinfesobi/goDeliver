import PropTypes from "prop-types";

const Button = ({ text, onClick, loading, icon, width, height }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-godeliver-button font-inter hover:bg-[#2563EB] hover:shadow-md rounded-full text-[#F9FAFB] px-4 py-1 
         transition font-bold  focus:outline-none focus:ring-4  active:shadow-2xl space-x-4 ${width} ${height}`}
    >
      {loading ? (
        <div className="justify-self-center w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {" "}
          {text} {<span className="ml-1 ">{icon}</span>}{" "}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
