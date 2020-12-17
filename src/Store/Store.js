import React from 'react';
import { observable, action, computed, runInAction } from "mobx";
import { getList as jobService } from './../Services/Jobs';
class ListStore {
  @observable lists = [];
  @observable filter = "";
  @observable searchQuery = "";
  @observable status = "";

  @action getList = async (search) => {
    try {
      var params = {
        searchQuery: search
      };
      //const urlParams = new URLSearchParams(Object.entries(params));
      const data = await jobService(params);
      runInAction(() => {
        this.lists = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  }

  @action deleteList = (list) => {
    this.lists = this.lists.filter(t => t !== list)
  }

  @computed get filteredLists() {
    const matchCase = new RegExp(this.filter, "i")
    return this.lists.filter(list => !this.filter || matchCase.test(list.value))
  }
}

/* Store helpers */
const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};

//export default ListStore = new ListStore();
export default ListStore;