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
    <div className="App">
      <ReactJson src={my_json_object} />
    </div>
  );
}

export default App;
