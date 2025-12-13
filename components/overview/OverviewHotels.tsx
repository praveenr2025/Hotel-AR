export default function OverviewHotels() {
  return (
    <section className="card">
      <h4>Top hotels – this week</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Bookings</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Grand Meridian</td><td>34</td><td>1</td></tr>
          <tr><td>Oasis Bay</td><td>24</td><td>1</td></tr>
        </tbody>
      </table>
    </section>
  );
}
