import React from "react";

//components
import Form from "./components/Form";
import Layout from "./components/Layout";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

function App() {
  return (
    <Layout>
      <Form />
      <Todos />
    </Layout>
  );
}

export default App;
