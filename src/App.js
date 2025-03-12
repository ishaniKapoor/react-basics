import logo from "./../public/logo192.png";

function Logo(props){
  const userPic = <img src={logo} />
  return userPic;
}
function App(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <Logo />
    </div>
  );
}

export default App;
