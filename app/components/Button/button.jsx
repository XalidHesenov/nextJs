const Button = (props) => {
    return (
        <button className="h-24 w-full mt-3 border-l-4 border-l-blue-600 transition hover:bg-blue-600 bg-blue-900 text-center justify-center items-center font-bold uppercase">{props.text}</button>
    )
}
export default Button