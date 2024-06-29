import "./App.css";

function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  return (
    <>
      <h1 className="text-4xl text-center font-bold">A blog app with appwrite</h1>
    </>
  );
}

export default App;
