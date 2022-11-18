import './data-table'
import sortIcon from './sortIcon.png'

function App() {
  return (
    
       <data-table
          src="https://jsonplaceholder.typicode.com/users"
          cols="id,name,username,email,phone"
          sorticon={sortIcon}
      />
  );
}

export default App;
