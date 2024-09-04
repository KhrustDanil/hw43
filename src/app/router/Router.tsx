import { Routes, Route } from "react-router-dom";
import { Home, Albums, About, Album, Notes } from "../../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/about" element={<About />} />
      <Route path="/albums/:id" element={<Album />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

export default AppRouter;
