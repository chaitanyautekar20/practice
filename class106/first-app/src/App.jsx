import Navbar from "./components/navbar.jsx"
import Footer from "./components/footer.jsx"
import Card from './components/card.jsx'
function App() {


  return (
    <>
      <Navbar />    
      <div className="cards">
        <Card title="This is the card one" description ="This is the decription of the book"/>
<Card title="This is the card one" description ="This is the decription of the book"/>


      </div>
      <Footer />
    </>
  )
}

export default App
