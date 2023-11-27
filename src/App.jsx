import Cover from "./components/home/Cover"
import Browse from "./components/home/Browse"

function App({addItem}) {
  return (
    <>
        <Cover />
        <Browse addItem={addItem} />
    </>
  )
}

export default App
