const Card = (props) => {
    const {title, value} = props
    return (
        <div className="bg-white shadow-md rounded-xl p-4 mx-auto max-w-3xs">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    )
}

export default Card