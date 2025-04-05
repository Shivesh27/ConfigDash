const Button = (props) => {
    const {label, action, message} = props

    const onClickHandler = (action, message) => {
        if(action === 'alert') {
            alert(message)
        }
    }

    return(
        <button 
            type="button" 
            className="bg-blue-400 hover:bg-blue-300 hover:cursor-pointer px-4 py-4 rounded-2xl shadow-lg"
            onClick={() => onClickHandler(action, message)}
        >
            {label}
        </button>
    )
}

export default Button