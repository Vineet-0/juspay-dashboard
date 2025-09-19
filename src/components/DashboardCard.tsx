const DashboardCard = ({
    title,
    value,
    growth,
}: {
    title: string;
    value: string;
    growth: string;
}) => {
    return (
        <div className="p-4 bg-white shadow rounded flex flex-col">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-green-500">{growth}</p>
        </div>
    );
};

export default DashboardCard;
