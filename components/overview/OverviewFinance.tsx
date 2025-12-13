export default function OverviewFinance() {
  return (
    <section className="card">
      <h4>Billing & payment health</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Bucket</th>
            <th>Invoices</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Pending approval</td><td>6</td><td>₹ 1,86,200</td></tr>
          <tr><td>In clarification</td><td>3</td><td>₹ 74,250</td></tr>
          <tr><td>Processing</td><td>4</td><td>₹ 1,34,520</td></tr>
        </tbody>
      </table>
    </section>
  );
}
