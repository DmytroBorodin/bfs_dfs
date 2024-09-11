import { useContext } from "react";
import { AppButton, AppWrapper, ButtonsWrapper } from "./App.styles";
import BreadthFirstSearch from "./components/BreadthFirstSearch/BreadthFirstSearch";
import DepthFirstSearch from "./components/DepthFirstSearch/DepthFirstSearch";
import { AppContext, SearchType } from "./store/store";

function App() {
  const ctx = useContext(AppContext);

  const handleOnChooseSearch = (searchType: SearchType) => {
    if (ctx.setSearchType) ctx.setSearchType(searchType);
  };

  return (
    <>
      <AppWrapper>
        {!ctx.searchType && (
          <div>
            {" "}
            <h1>Choose the search type you want to test</h1>
            <ButtonsWrapper>
              <AppButton
                variant="contained"
                onClick={() => handleOnChooseSearch(SearchType.BFS)}
              >
                BFS
              </AppButton>
              <AppButton
                variant="contained"
                onClick={() => handleOnChooseSearch(SearchType.DFS)}
              >
                DFS
              </AppButton>
            </ButtonsWrapper>
          </div>
        )}

        {ctx.searchType === SearchType.BFS && <BreadthFirstSearch />}
        {ctx.searchType === SearchType.DFS && <DepthFirstSearch />}
      </AppWrapper>
    </>
  );
}

export default App;
