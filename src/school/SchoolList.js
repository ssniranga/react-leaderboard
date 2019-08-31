import React , {Component} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

let timeOut = 15000; 
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
            SchoolData: []
        };
      }

    componentDidMount() {
        this.getSchoolData();
        this.interval = setInterval(() => {
            this.getSchoolData();
            localStorage.clear();
            console.log("b");
        }, timeOut);
    }

    getSchoolData() {
        if (localStorage.getItem('schoolCacheData')){
            let sData =JSON.parse(localStorage.getItem('schoolCacheData'));
            this.setState({               
                SchoolData: sData.slice(0,10)
            });
            console.log("School cached");
        }
        else{
            axios.get("../data/school-scores.json")
            .then(res => {
                let sData = res.data; 
                sData.sort(function(a, b){return b.score - a.score});
                this.setState({               
                    SchoolData: sData.slice(0,10)
                });
                localStorage.setItem('schoolCacheData', JSON.stringify(res.data));
            });
            console.log("School non cached");
        }
    }
     componentWillUnmount() {
       clearInterval(this.interval);
     }

     _getSchool() {
        const data = this.state.SchoolData;
        const schItems = data.map((school, index) => (
            {   
                rank : index + 1 , 
                admin_name : school.admin_name,
                school: school.school_name, 
                address: school.address, 
                score:school.score   
            }
        ));
        return schItems;
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
                    data={this._getSchool()}
                />
            </div>
    );
}}

export default SchoolList;
