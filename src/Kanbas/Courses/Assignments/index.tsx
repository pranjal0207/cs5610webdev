import AssignmentList from "./AssignmentList";
import AssignmentButtons from "./AssignmentButtons";

function Assignments() {
  return (
    <div className="m-3">
      <h2 className="mb-3">Assignments</h2>
      <AssignmentButtons />
      <br />
      <br />
      <AssignmentList />
    </div>
  );
}
export default Assignments;