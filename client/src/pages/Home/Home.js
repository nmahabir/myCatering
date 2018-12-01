import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Firebase from "../../components/Firebase";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import images from "../../images.json";
import Card from "../../components/Card";

class Home extends Component {
  state = {
    images: images
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
            <h3>Welcome to My Catering!</h3>
          </Jumbotron>
          </Row>
          <Row>
          {this.state.images.map(entry => (
            <Card id={entry.id} image={entry.image} />
          ))}
          </Row>


          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
          </Col>
        
      </Container>

    );
  }
}

export default Home;
