import './App.css';

function Header() {
  return (
    <header>
      <nav>
        {/* Add your navigation links here */}
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      Homepage
    </main>
  );
}

function Footer() {
  return (
    <footer>
      {/* Add your footer content here */}
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;



