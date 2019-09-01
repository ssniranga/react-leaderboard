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
      name: "Teacher's Name",
      selector: 'teacher_name'
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

class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ClassData: []
        };
      }

    componentDidMount() {
        this.getClassData();
        this.interval = setInterval(() => {
            this.getClassData();
            localStorage.clear();
            console.log("b");
        }, timeOut);
    }

    getClassData() {
        if (localStorage.getItem('classCacheData')){
            let sData =JSON.parse(localStorage.getItem('classCacheData'));
            this.setState({               
                ClassData: sData.slice(0,10)
            });
            console.log("Class cached");
        }
        else{
            axios.get("../data/class-scores.json")
            .then(res => {
                let cData = res.data; 
                cData.sort(function(a, b){return b.score - a.score});
                this.setState({               
                    ClassData: cData.slice(0,10)
                });
                localStorage.setItem('classCacheData', JSON.stringify(res.data));
            });
            console.log("Class non cached");
        }
    }
     componentWillUnmount() {
       clearInterval(this.interval);
     }

     _getClass() {
        const data = this.state.ClassData;
        const clsItems = data.map((classes, index) => (
            {   
                rank : index + 1 , 
                teacher_name : classes.teacher_name,
                class: classes.class_name, 
                school: classes.school_name, 
                score:classes.score   
            }
        ));
        return clsItems;
    }

     render(){
        return (
            <div className="student-container">
                <h2>Class Leaderboard</h2>
                <DataTable
                    columns={columns}
                    highlightOnHover
                    pointerOnHover
                    striped
                    className="student-table"
                    data={this._getClass()}
                />
            </div>
    );
}}

export default ClassList;
