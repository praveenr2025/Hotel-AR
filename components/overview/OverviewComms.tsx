export default function OverviewComms() {
  return (
    <section className="card">
      <h4>Conversations by type</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Open</th>
            <th>SLA risk</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Invoice</td><td>4</td><td>1</td></tr>
          <tr><td>Booking</td><td>3</td><td>0</td></tr>
          <tr><td>Contract</td><td>2</td><td>1</td></tr>
        </tbody>
      </table>
    </section>
  );
}
