import React from 'react';

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

export default App;