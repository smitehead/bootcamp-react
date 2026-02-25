import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AbountPage from "./components/AbountPage";
import LinkTestComponent from "./components/LinkTestComponent";
import NavigateTestComponent from "./components/NavigateTestComponent";
import UserDetailPage from "./components/UserDetailPage";
import UserListComponent from "./components/UserListComponent";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AbountPage />} />
        <Route path="/linktest" element={<LinkTestComponent />} />
        <Route path="/navigatetest" element={<NavigateTestComponent />} />
        {/* 
          url주소를 동적으로 설정하기
          주소에 :key 방식으로 설정 -> useParams를 이용해서 데이터를 가져옴
         */}
        {/* <Route path="/users/:id" element={<UserDetailPage />} /> */}
        {/* <Route path="/users" element={<UserListComponent />} /> */}
        {/* 중첩라우트 설정하기 */}
        <Route path="/users" element={<UserContainer />}>
          <Route index element={<UserListComponent />} />
          <Route path=":id" element={<UserDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
