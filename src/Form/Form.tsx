import { useState, ChangeEvent, FormEvent } from "react";

type userDetails = {
  userName: string;
  userEmail: string;
  userRoll: number;
};

function Form() {
  const [details, setDetails] = useState<userDetails>({userEmail:"",userName:"",userRoll:0});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name submitted: ", details);
    document.querySelectorAll("input").forEach(elem => elem.value='');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">Name: </label>
      <input
        type="text"
        name="userName"
        id="userName"
        className="border-2 border-gray-300 rounded-md"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="userEmail">Email: </label>
      <input
        type="email"
        name="userEmail"
        id="userEmail"
        className="border-2 border-gray-300 rounded-md"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="userRoll">Roll: </label>
      <input
        type="number"
        name="userRoll"
        id="userRoll"
        className="border-2 border-gray-300 rounded-md"
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit" className="border-2 border-blue-400 rounded-lg p-1 bg-blue-500">Show name</button>
    </form>
  );
}

export default Form;
