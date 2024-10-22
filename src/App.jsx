import ToDo from "./components/ToDo";
import UserName from "./components/UserName";

export default function App() {
  return (
    <h1 className="Main h-screen p-0 bg-gradient-to-r from-blue-500 to-blue-300">

      <div className="main container mx-auto">

        <UserName />
        <ToDo />

      </div>
    </h1>
  )
}