import React, { Component } from 'react'
import firebase from './../config/firebase';

class Create extends Component {
  
  ref = firebase.firestore().collection('boards');

  state = {
    book: '',
    description: '',
    author: ''
  };

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { book, description, author } = this.state;

    this.ref.add({
      book,
      description,
      author
    }).then((docRef) => {
      this.setState({
        book: '',
        description: '',
        author: ''
      });
      // this.props.history.push("/private")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { book, description, author } = this.state;
    return (
      <div className="create-wrapper">
        <h3>Add Book</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <p>Book:</p>
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
          <button type="submit">Add Book</button>
        </form>
      </div>
    )
  }
}

export default Create;