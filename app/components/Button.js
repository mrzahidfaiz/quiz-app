
const Button = ({ text, onClik }) => {
    return <button
        onClick={onClik}
        className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer shadow-md rounded-md border-none"
    >
        {text}
    </button>
}

export default Button