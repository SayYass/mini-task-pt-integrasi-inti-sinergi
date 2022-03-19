import "./available.scss";
import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";
const Available = () => {
  const { getListResult } = useSelector((state) => state.dataReducer);
  if (getListResult.length > 0) {
    const COLORS = ["#295757", "#EF6D3F", "#FFBB28", "#FF8042"];
    const available = getListResult.filter(
      (item) => item.availability === "Available"
    );
    const full = getListResult.filter((item) => item.availability === "Full");

    const data = [
      { name: "Available", value: available.length },
      { name: "Full", value: full.length },
    ];
    const pieChart = (
      <PieChart width={250} height={230}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={6}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
    return (
      <div className="category-content">
        <div className="category_title">
          <h3>Availability Ratio</h3>
        </div>
        <div className="chart">{pieChart}</div>
        <div className="keterangan">
          <div className="keterangan_item">
            <div className="keterangan_item_title">
              <div className="warna1"></div> <h5>Available</h5>
            </div>
            <div className="number">{available.length}</div>
          </div>
          <div className="keterangan_item">
            <div className="keterangan_item_title">
              <div className="warna2"></div> <h5>Full</h5>
            </div>
            <div className="number">{full.length}</div>
          </div>
        </div>
      </div>
    );
  } else {
    const COLORS = ["#295757", "#EF6D3F", "#FFBB28", "#FF8042"];
    const data = [
      { name: "Group A", value: 0 },
      { name: "Group B", value: 0 },
    ];
    const pieChart = (
      <PieChart width={250} height={230}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={6}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
    return (
      <div className="category-content">
        <div className="category_title">
          <h3>Availability Ratio</h3>
        </div>
        <div className="chart">{pieChart}</div>
        <div className="keterangan">
          <div className="keterangan_item">
            <div className="keterangan_item_title">
              <div className="warna1"></div> <h5>Available</h5>
            </div>
            <div className="number">0</div>
          </div>
          <div className="keterangan_item">
            <div className="keterangan_item_title">
              <div className="warna2"></div> <h5>Full</h5>
            </div>
            <div className="number">0</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Available;
