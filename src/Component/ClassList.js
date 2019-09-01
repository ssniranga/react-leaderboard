import React, { Component } from 'react';
import service from '../Services/service';
import DataTable from 'react-data-table-component';

let timeOut = process.env.REACT_APP_REFRESH_RATE; 

const columns = [
    {
        name: 'Rank',
        selector: 'rank',
        center: true
    },
    {
        name: "Teacher's Name",
        selector: 'teacher_name'
    },
    {
        name: 'Class',
        selector: 'class',
        center: true
    },
    {
        name: 'School',
        selector: 'school'
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true,
        center: true
    }
];

class ClassList extends Component {
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
        const data = await service('../data/class-scores.json');
        this.setState({
            data: data.map((classes, index) => ({
                rank: index + 1,
                teacher_name: classes.teacher_name,
                class: classes.class_name,
                school: classes.school_name,
                score: classes.score
            }))
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="student-container">
                <h2>Class Leaderboard</h2>
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
    }
}

export default ClassList;