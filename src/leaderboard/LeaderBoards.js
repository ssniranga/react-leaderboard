import React , {Component} from 'react';
import StudentList from '../students/StudentList';
import ClassList from '../class/ClassList';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

class Leaderboards extends Component {
    render(){
        return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={12} md={4} lg={3}>
              <h1>Leaderboard</h1>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Student's Leaderboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Class Leaderboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">School Leaderboard</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} md={8} lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <StudentList/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ClassList/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    School Leaderboard
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        );
    }
}
export default Leaderboards;
