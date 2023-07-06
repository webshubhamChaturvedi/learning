import React, { useState } from "react";

function InvestmenTable(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.setValue.map(
          (value, i) =>
            value !== false && (
              <tr key={value}>
                <td>{value.investmentduration}</td>
                <td>{value.yearlySaving}</td>
                <td>{value.intrest}</td>
                <td>{value.intrest}</td>
                <td>{value.currentsaving}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
}

export default InvestmenTable;
