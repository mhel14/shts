import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import firebase from './../config/firebase';
import Create from './create';
import Header from './admin-header';

class Private extends Component {
  state = {
    boards: []
  }

  ref = firebase.firestore().collection('boards');
  unsubscribe = null;

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { book, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        book,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="private-page">
        {this.props.authenticated ?  
          <Fragment>
            <Header>
              <Link to="/">Home</Link>
            </Header>
            <div className="container">
              <Create />
              <div className="books-heading">
                <p>Book</p>
                <p>Description</p>
                <p>Author</p>
              </div>
              {this.state.boards.map(board =>
                <div className="book-wrapper" key={board.key}>
                  <p><Link to={`/read/${board.key}`}>{board.book}</Link></p>
                  <p>{board.description}</p>
                  <p>{board.author}</p>
                </div>
              )}
            </div>
          </Fragment>
          :
          <Fragment>
            <p> Pls login in order to proceed... </p>
            <p><Link to="/">Login</Link></p>
          </Fragment>
          
        }
      </div>
    )
  }
}

export default Private;
