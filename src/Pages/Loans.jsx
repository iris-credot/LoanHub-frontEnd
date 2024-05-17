
import React from "react";
import Barnav from "../Components/Barnav";
const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Teacher Name",
    accessor: "teacherName",
  },
  {
    Header: "Loan Type",
    accessor: "loanType",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
const data = [
  {
    id: 1,
    teacherName: "John Doe",
    loanType: "Short Term",
    amount: "$5000",
    status: "Pending",
  },
  {
    id: 2,
    teacherName: "Jane Smith",
    loanType: "Long Term",
    amount: "$10000",
    status: "Completed",
  },
  {
    id: 3,
    teacherName: "Bob Johnson",
    loanType: "Development",
    amount: "$7500",
    status: "Pending",
  },
  {
    id: 4,
    teacherName: "Mary Williams",
    loanType: "Emergency",
    amount: "$8000",
    status: "Completed",
  },
];
const Table = ({ columns, data }) => {
  return (
    <>
    <Barnav/>
    <div>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`cell-${column.accessor}-${row.id}`} className="px-6 py-4">
                {column.accessor === "status" ? (
                  <span
                    className={`px-2 py-1 font-semibold leading-tight text-white ${
                      row[column.accessor] === "Pending"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  >
                    {row[column.accessor]}
                  </span>
                ) : (
                  row[column.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};
const Loans = () => {
  return (
    <div className="p-6 w-[80%] ml-[20%]">
      <h2 className="text-2xl font-semibold mb-4">Manage Loans</h2>
      <Table columns={columns} data={data} />
    </div>
   
  );
};
export default Loans;