import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Firebase from "../../components/Firebase";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SignIn extends Component {
  state = {
    foodImage: []
  };

  componentDidMount() {
    this.loadHome();
  }

  loadHome = () => {};

  handleLoadHome = event => {
    const arrayOfImages = event.target;
    this.setState({
      foodImage: arrayOfImages
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>Welcome to My Catering!</h1>
          </Jumbotron>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
