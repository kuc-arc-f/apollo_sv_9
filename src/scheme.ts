const {gql} = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

const scheme = {
  getTypeDefs : function(){
    return gql`
    type User {
      id: String
      mail: String
      name: String
      password: String
    }
    type Book {
      id: String
      title: String
      content: String
      user_id: String
      created_at: String
    }
    type Task {
      id: Int
      title: String
      content: String
      created_at: String
    }
    type Content {
      id: String
      name: String
      values: String
      user_id: String
      created_at: String
    }
    type Category {
      id: String
      name: String!
    }
    type Types {
      id: String
      name: String!
    }
    type Tags {
      id: String
      name: String!
    }            
    type NoteTag {
      id: String!
      note_id: String
      name: String!
    }     
    type Note {
      id: String
      title: String
      content: String!
      userId: String! 
      category: String!
      noteType: String!
      created_at: String
    }                     
    ${GQL_QUERY}
    ${GQL_MUTATION}
  `;
  }
}
export default scheme;
