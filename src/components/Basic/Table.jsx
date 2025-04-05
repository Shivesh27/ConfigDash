const Table = (props) => {
    const {headers, data} = props
    return (
        <div className="relative overflow-x-auto rounded-xl shadow-xl">
        <table className="w-full text-sm text-left">
            <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                    {headers.map((header) => {return <th className="px-6 py-3">{header}</th>})}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row) => {
                        return <tr className="border-b border-gray-200">
                            {
                                row.map((val) => {
                                    return <td className="px-6 py-3">{val}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default Table