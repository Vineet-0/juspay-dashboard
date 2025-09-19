const Table = () => {
    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-bold mb-4">Top Selling Products</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">ASOS Ridley High Waist</td>
                        <td className="border p-2">$74.49</td>
                        <td className="border p-2">82</td>
                        <td className="border p-2">$6,518.18</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
