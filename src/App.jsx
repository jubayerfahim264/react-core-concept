import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
const App = () => {
  const personName = [
    { name: "John Doe", job: "Software Engineer" },
    { name: "Jane Smith", job: "Data Scientist" },
    { name: "Alice Johnson", job: "Product Manager" },
  ];
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <Person name={personName[0].name} job={personName[0].job} />
      <Person name={personName[1].name} job={personName[1].job} />
      <Person name={personName[2].name} job={personName[2].job} />
      {/* ====Person Component=== */}
      <User />
      {/* ====User Component=== */}
      <Post />
      {/* ====Post Component=== */}
      <Comments />
      {/* ====Comments Component=== */}
    </div>
  );
};

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });
  const userList = user.slice(0, 9); // Limiting to 9 users for better UI
  return (
    <div className="container">
      <h2>User Component</h2>
      <Row>
        {userList.map((user) => {
          return (
            <Col key={user.id} xs="12" sm="6" md="3" lg="3">
              <Card
                className="mb-4"
                style={{ backgroundColor: "dodgerblue", color: "white" }}
              >
                <CardBody>
                  <CardHeader tag={"h5"}>{user.name}</CardHeader>
                  <ListGroup flush style={{ borderRadius: 4 }}>
                    <ListGroupItem>
                      <strong>Email:</strong> {user.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Phone:</strong> {user.phone}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Website:</strong> {user.website}
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
// User component fetches user data from an API and displays it in a card format
const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  });
  const postList = post.slice(0, 8); // Limiting to 8 posts for better UI
  return (
    <div className="container">
      <h2>Post Component</h2>
      <Row className="row container">
        {postList.map((post) => {
          return (
            <Col key={post.id} xs="12" sm="6" md="4" lg="4">
              <Card className="mb-4" style={{ backgroundColor: "#0C2D48" }}>
                <CardBody>
                  <CardHeader tag={"h6"} style={{ color: "white" }}>
                    {post.title}
                  </CardHeader>
                  <CardText tag={"p"} style={{ color: "#D4F1F4" }}>
                    {post.body}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const commentsList = comments.slice(0, 10);

  return (
    <div className="container">
      <h2>Comments Component</h2>
      <Row>
        {commentsList.map((comment) => {
          return (
            <Col key={comment.id} xs="12" sm="6" md="4" lg="4">
              <Card className="mb-4" style={{ backgroundColor: "#189AB4" }}>
                <CardBody>
                  <CardHeader tag={"h5"} style={{ color: "white" }}>
                    {comment.email}
                  </CardHeader>
                  <CardText tag={"p"} style={{ color: "#D4F1F4" }}>
                    {comment.body}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
// Comments Component

// Below the example of props management in React
const Person = ({ name, job }) => {
  return (
    <div className="container">
      <Row>
        <Col xs="12" sm="6" md="4" lg="4">
          <Card className="mb-4" style={{ backgroundColor: "#0C2D48" }}>
            <CardBody>
              <CardHeader tag={"h5"} style={{ color: "white" }}>
                {name}
              </CardHeader>
              <CardText tag={"p"} style={{ color: "#D4F1F4" }}>
                {job}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default App;
