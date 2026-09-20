import { weeklyData } from "../data/dashboardData";

function ProductivityChart() {
  const maxHours = Math.max(
    ...weeklyData.map((item) => item.hours)
  );

  return (
    <div className="chart-card">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">
            PRODUCTIVITY
          </span>

          <h2>Weekly Activity</h2>
        </div>

        <select defaultValue="week">
          <option value="week">This week</option>
          <option value="month">This month</option>
        </select>
      </div>

      <div className="chart">
        {weeklyData.map((item) => (
          <div className="chart-column" key={item.day}>
            <span className="chart-value">
              {item.hours}h
            </span>

            <div className="chart-track">
              <div
                className="chart-bar"
                style={{
                  height: `${(item.hours / maxHours) * 100}%`,
                }}
              />
            </div>

            <span className="chart-day">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <div className="chart-summary">
        <div>
          <strong>37.7h</strong>
          <span>Total coding time</span>
        </div>

        <div>
          <strong>+18.4%</strong>
          <span>Compared to last week</span>
        </div>

        <div>
          <strong>5.4h</strong>
          <span>Daily average</span>
        </div>
      </div>
    </div>
  );
}

export default ProductivityChart;