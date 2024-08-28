interface propsChildExample{
    name : string;
    age : number;
}


function PropChild({name,age}:propsChildExample) {
  return (
    <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
    </div>
  )
}

export default PropChild