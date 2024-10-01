import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl w-full p-6 bg-white rounded-md">
      <h2 className="mb-2 text-4xl font-novaReg">Refund Policy</h2>
      <p className="mb-6 text-gray-700">
        In case of cancellation of admission, the fee will be refunded as per
        the AICTE notification and G.O. passed by the U.P. Government.
      </p>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-indigo-950 text-white font-novaReg">
          <tr>
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">
              Request for Refund
            </th>
            <th className="border border-gray-300 px-4 py-2">Refund</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">a.</td>
            <td className="border border-gray-300 px-4 py-2">
              Request received before start of session
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Entire fee after deduction of Rs. 1000/-
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">b.</td>
            <td className="border border-gray-300 px-4 py-2">
              Request received after start of session and seat not being filled
              by the College till the last date of admissions
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Caution money only
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-6 text-gray-700">
        In case of withdrawal from hostel, only security and mess charges (for
        unutilized months) are refundable on a pro-rata basis.
      </p>
    </div>
  );
};

export default RefundPolicy;
