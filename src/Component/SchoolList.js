import React , {Component} from 'react';
import service from '../Services/service';
import DataTable from 'react-data-table-component';

const columns = [
    {
      name: 'Rank',
      selector: 'rank',
      center:true,
    },
    {
      name: "Admin Name",
      selector: 'admin_name'
    },
    {
        name: 'School',
        selector: 'school'
    },
    {
        name: 'Address',
        selector: 'school_address',
        center:true,
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true,
        center:true,
    },
  ];

class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
      }


      componentDidMount() {
        this.getData();
        this.interval = setInterval(() => {
            localStorage.clear();
            this.getData();
        }, process.env.REACT_APP_REFRESH_RATE);
    }


    async getData() {
        const data = await service('../data/school-scores.json');
        this.setState({
            data: data.map((school, index) => ({
                rank : index + 1 , 
                admin_name : school.admin_name,
                school: school.school_name, 
                address: school.address, 
                score:school.score   
            }))
        });
    }

     componentWillUnmount() {
       clearInterval(this.interval);
     }

     render(){
        return (
            <div className="student-container">
                <h2>School Leaderboard</h2>
                <DataTable
                    columns={columns}
                    highlightOnHover
                    pointerOnHover
                    striped
                    className="student-table"
                    data={this.state.data}
                />
            </div>
    );
}}

export default SchoolList;
