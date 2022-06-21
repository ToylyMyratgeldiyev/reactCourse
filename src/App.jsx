import React from "react";
import { Posts } from "./Components/posts";
class App extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    posts:[
      {id:'abc1',name:'JS Basics', viewText : true},
      {id:'abc2',name:'JS Advanced', viewText : true},
      {id:'abc3',name:'React JS', viewText : true},

    ]
  }
 }

 removePost = (id) =>{
  this.setState({posts:this.state.posts.filter(post => (post.id !== id))})
 }  

 render(){
  return (
    <div>
      <Posts posts={this.state.posts} removePost={this.removePost}/>
    </div>
  )
 }

}
 
export default App;
 