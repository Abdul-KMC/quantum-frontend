import React from "react";
import './table.css'

function Table() {
  const data = [
    {
      id: 1,
      sNo: 1,
      name: "John Doe",
      dateOfBirth: "1997-02-10",
      email: "John123@gmail.com",
      Password: "........",
      action: "Edit",
    },
    {
      id: 2,
      sNo: 2,
      name: "Jane Doe",
      dateOfBirth: "1991-02-10",
      email: "Jahn123@gmail.com",
      Password: "........",
      action: "Delete",
    },
    {
      id: 3,
      sNo: 3,
      name: "Bob Smith",
      dateOfBirth: "2000-02-10",
      email: "Bob123@gmail.com",
      Password: "........",
      action: "Edit",
    },
    // add more data as needed
  ];

  return (
    <table className="DataTable">
      <thead>
        <tr>
          <th>S.no.</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.sNo}</td>
            <td>{item.name}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.email}</td>
            <td>{item.Password}</td>
            <td>{item.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;