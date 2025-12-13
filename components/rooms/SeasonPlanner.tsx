"use client";

export default function SeasonPlanner() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Plan a season</div>
          <div className="card-subtitle">
            Define a new season band for a date range.
          </div>
        </div>
      </div>

      <form className="grid-4">
        <div>
          <label>Season name</label>
          <input className="input" />
        </div>
        <div>
          <label>Season type</label>
          <select className="select">
            <option>Peak</option>
          </select>
        </div>
        <div>
          <label>Valid from</label>
          <input className="input" />
        </div>
        <div>
          <label>Valid to</label>
          <input className="input" />
        </div>
        <div>
          <label>Weekday BAR</label>
          <input className="input" />
        </div>
        <div>
          <label>Weekend BAR</label>
          <input className="input" />
        </div>
        <div>
          <label>Sunday BAR</label>
          <input className="input" />
        </div>
        <div>
          <label>Min LOS</label>
          <input className="input" />
        </div>

        <label>Restrictions</label>
        <textarea className="textarea"></textarea>

        <div className="actions">
          <button className="btn btn-primary">Save season</button>
          <button className="btn">Reset</button>
        </div>
      </form>
    </div>
  );
}
