import { dataType } from "./Data"

interface StudentProps {
    item:dataType
}

function Student({item}:StudentProps) {
    const {name,className,address} = item;
     
  return (
    <div className="border-2 border-black bottom-2 rounded-md p-4 flex flex-col gap-3 items-center hover:shadow-[0px_4px_6px_rgba(255,_0,_0,_0.5)] ">
        <div><img src="https://placehold.co/300x200" alt="Student Image" /></div>
        <div>Name :{name}</div>
        <div>ClassName : {className}</div>
        <div>Address: {address}</div>
    </div>
  )
}

export default Student
