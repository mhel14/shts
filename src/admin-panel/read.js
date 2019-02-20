import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from './../config/firebase';
import Header from './admin-header';

class Read extends Component {
  state = {
    board: {},
    key: ''
  };

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/private")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const {book, description, author} = this.state.board;
    return (
      <div className="book-single-page">
        <Header>
          <Link to="/private">Book List</Link>
        </Header>
        <div className="container">
          <h3 className="title">
            {book}
          </h3>
          <div className="desc">
            <strong>Description:</strong>
            <p>{description}</p>
          </div>
          <div className="author">
            <strong>Author:</strong>
            <p>{author}</p>
          </div>
          <Link to={`/update/${this.state.key}`} className="btn-edit">Edit</Link>&nbsp;
          <button onClick={this.delete.bind(this, this.state.key)} className="btn-delete">Delete</button>
          
        </div>
      </div>
    )
  }
}

export default Read;