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
      name: 'Name',
      selector: 'name'
    },
    {
        name: 'Class',
        selector: 'class',
        center:true,
    },
    {
        name: 'School',
        selector: 'school'
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true,
        center:true,
    },
  ];

class StudentList extends Component {
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
        const data = await service('../data/students-scores.json');
        this.setState({
            data: data.map((student, index) => ({
                rank : index + 1 , 
                name : student.name,
                class: student.class_name, 
                school: student.school_name, 
                score:student.score  
            }))
        });
    }

     componentWillUnmount() {
       clearInterval(this.interval);
     }

     render(){
        return (
            <div className="student-container">
                <h2>Student's Leaderboard</h2>
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

export default StudentList;
