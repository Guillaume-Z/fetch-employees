import { useState } from 'react'
import './App.css'
import EmployeeCard from './assets/components/EmployeeCard'

const sampleEmployee = {
  name: {
    first: "Penny",
    last: "Ramirez",
  },
  email: "penny.ramirez@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/women/81.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      });
  };

  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
