import data from "./Data";
import { dataType } from "./Data";
import Student from "./Student";

function StudentDetails() {
  return (
    <>
      <p className="text-center">Students Detail</p>
      <div className="grid place-items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item: dataType) => (
          <Student key={item.name} item={item} />
        ))}
      </div>
    </>
  );
}

export default StudentDetails;
