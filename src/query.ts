
export const GQL_QUERY = `
  type Query {
    hello: String
    getToken : String
    tasks: [Task]
    task(id: Int): Task    
  }
`;