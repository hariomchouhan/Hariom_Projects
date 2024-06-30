import "./App.css";
import conf from "./conf/conf";
function App() {
  console.log(conf.appwriteBucketId);
  return (
    <>
      <h1 className="text-4xl text-center font-bold">A blog app with appwrite</h1>
    </>
  );
}

export default App;
