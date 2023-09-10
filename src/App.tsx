import { Link } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { links } from "./mocks";

function App() {
  return (
    <PageContainer>
      {links.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.name}
        </Link>
      ))}
    </PageContainer>
  );
}

export default App;
