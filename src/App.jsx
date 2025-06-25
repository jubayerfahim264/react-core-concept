import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
const App = () => {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
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
            <Col key={user.id} xs="12" sm="6" md="4" lg="4">
              <Card className="mb-4">
                <CardBody>
                  <CardHeader tag={"h5"}>{user.name}</CardHeader>
                  <ListGroup flush>
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
              <Card className="mb-4">
                <CardBody>
                  <CardHeader tag={"h6"}>{post.title}</CardHeader>
                  <CardText tag={"p"} style={{ color: "gray" }}>
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
              <Card className="mb-4">
                <CardBody>
                  <CardHeader tag={"h5"}>{comment.email}</CardHeader>
                  <CardText tag={"p"} style={{ color: "gray" }}>
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

export default App;
