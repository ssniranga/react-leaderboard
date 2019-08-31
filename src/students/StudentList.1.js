import React , {Component} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const columns = [
    {
      name: 'Rank',
      selector: 'rank'
    },
    {
      name: 'First Name',
      selector: 'first_name'
    },
    {
        name: 'Last Name',
        selector: 'last_name'
    },
    {
        name: 'Class',
        selector: 'class'
    },
    {
        name: 'School',
        selector: 'school'
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true,
    },
  ];

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StudentData: []
        };
      }

    componentDidMount() {
        this.getStudentData();
        this.interval = setInterval(() => {
            this.getStudentData();
            console.log("a");
        }, 5000);
    }

    getStudentData() {
        axios.get("../data/students-scores.json")
        .then(res => {
            let sData = res.data; 
            sData.sort(function(a, b){return b.score - a.score});
            this.setState({               
                StudentData: sData.slice(0,10)
            });
        });
    }
    
     componentWillUnmount() {
       clearInterval(this.interval);
     }

     _getStudents() {
        const data = this.state.StudentData;
        const stuItems = data.map((student, index) => (
            {   
                rank : index + 1 , 
                first_name : student.first_name,
                last_name : student.last_name, 
                class: student.class_name, 
                school: student.school_name, 
                score:student.score   
            }
        ));
        return stuItems;
    }

     render(){
        return (
            <DataTable
                title="Student's Rank"
                columns={columns}
                data={this._getStudents()}
            />

    );
}}

export default StudentList;
