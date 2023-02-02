import React from 'react'
import ReactDom from 'react-dom'
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './AprrovalCard';
const App=()=>{
    return(
      <div className="ui container comments ">
        <ApprovalCard>
        <CommentDetail 
        author="sam" 
        date="6:00PM" 
        text="nice blog"
        avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard> 
             <CommentDetail author="Aleex" date="7:00PM" text="nailed it" avatar={faker.image.avatar()}/>
        </ApprovalCard>
      <ApprovalCard>  
        <CommentDetail author="Johnathan" date="8:00PM" text="opps commented" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      
      
      
        
      </div>
    );
}

ReactDom.render(<App/>,document.querySelector('#root'));

//{} is use when we want to show javascript variables
//<   />  is when we refer to components
// Prop system is used to pass data from parent to a child