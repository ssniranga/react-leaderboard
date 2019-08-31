import React , {Component} from 'react';
import StudentList from '../students/StudentList';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

class Leaderboards extends Component {
    render(){
        return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
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
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <StudentList/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    Class Leaderboard
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
