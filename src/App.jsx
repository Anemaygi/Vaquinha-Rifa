
import Main from "./components/main";
import Entenda from "./components/entenda";
import Rifa from "./components/rifa";
import Footer from "./components/footer";

function App() {
  return (
    <body class="bg-primary flex-none" >
    <Main/>
    <Entenda id="entenda" />
    <Rifa id="rifa" />
    <Footer />
    </body>
  )
}

export default App
