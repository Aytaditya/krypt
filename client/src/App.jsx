import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Services from './components/Services'
import Transactions from './components/Transactions'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="text-red-900 text-3xl">
      hiiii
      <Navbar />
      <Footer />
      <Loader />
      <Services />
      <Transactions />
      <Welcome />
    </div>
  )
}

export default App
