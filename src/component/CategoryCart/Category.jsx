import "./category.scss";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
const Category = () => {
  const { getListResult } = useSelector((state) => state.dataReducer);

  if (getListResult.length > 0) {
    const category1 = getListResult.filter(
      (item) => item.category === "Category 1"
    );
    const category2 = getListResult.filter(
      (item) => item.category === "Category 2"
    );
    const category3 = getListResult.filter(
      (item) => item.category === "Category 3"
    );
    const category4 = getListResult.filter(
      (item) => item.category === "Category 4"
    );

    const data = [
      { name: "Category 1", jumlah: category1.length, pv: 2400, amt: 2400 },
      { name: "Category 2", jumlah: category2.length, pv: 4567, amt: 2400 },
      { name: "Category 3", jumlah: category3.length, pv: 1398, amt: 2400 },
      { name: "Category 4", jumlah: category4.length, pv: 9800, amt: 2400 },
    ];

    return (
      <div className="category-content">
        <div className="category_title">
          <h3>Category Ratio</h3>
        </div>

        <div className="category-detail">
          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 1</h5>
            </div>
            <div className="category-detail_item_content">
              <span>{category1.length}</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 2</h5>
            </div>
            <div className="category-detail_item_content">
              <span>{category2.length}</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 3</h5>
            </div>
            <div className="category-detail_item_content">
              <span>{category3.length}</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 4</h5>
            </div>
            <div className="category-detail_item_content">
              <span>{category4.length}</span>
            </div>
          </div>
        </div>

        <div className="chart">
          <BarChart width={540} height={230} data={data} className="chart-item">
            <XAxis dataKey="name" stroke="#000" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="jumlah" fill="#EF6D3F" barSize={70} />
          </BarChart>
        </div>
      </div>
    );
  } else {
    const data = [
      { name: "Category 1", jumlah: 0, pv: 2400, amt: 2400 },
      { name: "Category 2", jumlah: 0, pv: 4567, amt: 2400 },
      { name: "Category 3", jumlah: 0, pv: 1398, amt: 2400 },
      { name: "Category 4", jumlah: 0, pv: 9800, amt: 2400 },
    ];

    return (
      <div className="category-content">
        <div className="category_title">
          <h3>Category Ratio</h3>
        </div>

        <div className="category-detail">
          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 1</h5>
            </div>
            <div className="category-detail_item_content">
              <span>0</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 2</h5>
            </div>
            <div className="category-detail_item_content">
              <span>0</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 3</h5>
            </div>
            <div className="category-detail_item_content">
              <span>0</span>
            </div>
          </div>

          <div className="category-detail_item">
            <div className="category-detail_item_title">
              <h5>Category 4</h5>
            </div>
            <div className="category-detail_item_content">
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="chart">
          <BarChart width={540} height={230} data={data} className="chart-item">
            <XAxis dataKey="name" stroke="#000" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="jumlah" fill="#EF6D3F" barSize={70} />
          </BarChart>
        </div>
      </div>
    );
  }
};

export default Category;
