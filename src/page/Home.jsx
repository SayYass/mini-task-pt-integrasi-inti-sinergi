import './home.scss'
import Form from '../component/Form/Form'
import Category from '../component/CategoryCart/Category'
import Available from '../component/AvailableCart/Available'
import Table from '../component/Table/Table'
import SelectedModal from '../component/modal/SelectedModal'
import WarningModal from '../component/modal/WarningModal'


const Home = () => {
  return (
<div className="home">
    <div className="title">
        <h2>Charts and Table Visualization</h2>
    </div>
    <div className="container">
    <div className="form-container">
    <Form/>
    </div>
    <div className="category-container">
      <Category/>
    </div>
    <div className="ratio-container">
        <Available/>
    </div>

    
    </div>
    <div className="table-container">
      <Table/>
    </div>

    <SelectedModal/> 
    <WarningModal/>
</div>
  )
}

export default Home