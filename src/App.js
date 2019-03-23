import React  from 'react';
import List from './components/List'
import Form from './components/Form'
import Post from './components/Posts'

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="ol-md-4 offset-md-1">
      <h2>Add a new articles</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Posts</h2>
      <Post />
    </div>
  </div>
)


export default App;
