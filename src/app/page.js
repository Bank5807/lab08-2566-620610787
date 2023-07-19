import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* task section */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task  */}
        <Task title="Read a book" />
        {/* task  */}
        <Task title="Take a shower" />
        {/* task  */}
        <Task title="Sleep" />
      </div>
      {/* footer section */}
      <Footer year="2023" fullName="Tanat Wipasakunden" studentId="620610787" />
    </div>
  );
}
