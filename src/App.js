import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './components/View'
import Add from './Add'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postId: undefined
    }
  }

  componentDidMount() {
    const listContents = localStorage.getItem("posts");
    let postValue = 0
    let loadedPosts = JSON.parse(listContents) || []
    // Ensure all posts have a reactions object
    loadedPosts = loadedPosts.map(post => ({
      ...post,
      reactions: post.reactions || { like: post.likes || 0, love: 0, laugh: 0 }
    }))
    if(loadedPosts.length > 0) {
      postValue = loadedPosts[loadedPosts.length - 1].postid
    }
    this.setState({
      posts: loadedPosts,
      postId: postValue
    })
  }

  updateListItems(postid, id, text, img, likes, profilePic) {
    const postItem = { 
      postid, 
      id, 
      text, 
      img, 
      profilePic,
      reactions: { like: 0, love: 0, laugh: 0 }
    }
    this.setState((state) => ({
      posts: state.posts.concat(postItem)
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  handleReaction = (id, type) => {
    this.setState((state) => ({
      posts: state.posts.map(post => {
        if (post.postid === id) {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              [type]: (post.reactions[type] || 0) + 1
            }
          }
        }
        return post
      })
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  render() {
    return (
      <Router>
        <Navbar bg="primary" expand="md">
          <Navbar.Brand>FriendBay™</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">View</Link>
              <Link className="nav-link" to="/add">Add</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/add" element={<Add onsubmit={(postid, id, text, img, likes, profilePic) => this.updateListItems(postid, id, text, img, likes, profilePic)} lastid={this.state.postId} />} />
            <Route path="/" element={<View posts={this.state.posts} reactAction={this.handleReaction} />} />
            <Route path="*" element={<div>Error: 404 not found</div>} />
          </Routes>
        </Container>
      </Router>
    );
  }
}

export default App;
