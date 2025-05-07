import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postId: 0,
      id: "",
      text: "",
      img: "",
      profilePic: "",
    }
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    };
    toastr.clear();
  }

  componentDidMount() {
    console.log(this.props.lastid)
    this.setState({
      postId: this.props.lastid
    })
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newId = this.state.postId + 1
    console.log(newId)
    this.props.onsubmit(newId, this.state.id, this.state.text, this.state.img, 0, this.state.profilePic);
    toastr.success("post added");
    this.setState({
      postId: newId,
      id: "",
      text: "",
      img: "",
      profilePic: "",
      likes: 0
    }, console.log(this.state))
  }


  render() {
    return (
      <>
        <Form onSubmit={(e) => this.submitHandler(e)} >
          <Form.Group controlId="userID">
            <Form.Label>User ID</Form.Label>
            <Form.Control name="id" type="text" value={this.state.id} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Text</Form.Label>
            <Form.Control name="text" type="text" value={this.state.text} placeholder="text" onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="img">
            <Form.Label>Image Address</Form.Label>
            <Form.Control name="img" type="text" value={this.state.img} placeholder="insert url for image" onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="profilePic">
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control name="profilePic" type="text" value={this.state.profilePic} placeholder="insert url for profile picture" onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Post
  </Button>
        </Form>
      </>
    );
  }

}
export default Add;
