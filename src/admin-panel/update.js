import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from './../config/firebase';
import Header from './admin-header';


class Update extends Component {
  state = {
    key: '',
    book: '',
    description: '',
    author: ''
  };

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          book: board.book,
          description: board.description,
          author: board.author
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { book, description, author } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      book,
      description,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        book: '',
        description: '',
        author: ''
      });
      this.props.history.push("/read/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { book, description, author } = this.state;
    return (
      <div>
        <Header>
          <Link to="/private">Book List</Link>
        </Header>
        <div className="container">
          <div className="create-wrapper">
            <h3>Update Book </h3>
            <form onSubmit={this.onSubmit}>
              <div>
                <p>Title:</p>
                <input type="text" name="book" value={book} onChange={this.onChange} placeholder="Book" required />
              </div>
              <div>
                <p>Description:</p>
                <textarea name="description" onChange={this.onChange} placeholder="Description" value={description} required></textarea>
              </div>
              <div >
                <p>Author:</p>
                <input type="text" name="author" value={author} onChange={this.onChange} placeholder="Author" required />
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Update;