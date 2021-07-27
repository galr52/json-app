import ReactJson from "react-extreme-json-view";
import "./App.css";

function App() {
  const my_json_object = {
    glossary: {
      title: "example glossary",
      GlossDiv: {
        title: "S",
        GlossList: {
          GlossEntry: {
            ID: "SGML",
            SortAs: "SGML",
            GlossTerm: "Standard Generalized Markup Language",
            Acronym: "SGML",
            Abbrev: "ISO 8879:1986",
            GlossDef: {
              para: "A meta-markup language, used to create markup languages such as DocBook.",
              GlossSeeAlso: ["GML", "XML"],
            },
            GlossSee: "markup",
          },
        },
      },
    },
  };
  return (
    <div class="flex flex-col h-screen">
      <header class="py-5 bg-gray-700 text-white text-center">
        Json App 😎
      </header>
      <main class="flex-1 overflow-y-auto p-5">
        <ReactJson src={my_json_object} />
      </main>
      <footer class="py-5 bg-gray-700 text-center text-white">
        &copy; Copyright 2021
      </footer>
    </div>
  );
}

export default App;
