import { PieChart, Pie, Cell, Tooltip } from "recharts"
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

const PieChartComponent = (props) => {
    const {title, data} = props
    return (
        <div className="shadow-2xl hover:shadow-xl rounded-2xl w-fit transition duration-400 ease-in-out">
            <h2 className="font-bold text-2xl p-4 ml-2">{title}</h2>
            <PieChart width={300} height={250}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={80}
                    dataKey="value"
                >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip/>
            </PieChart>
        </div>
    )
}

export default PieChartComponent