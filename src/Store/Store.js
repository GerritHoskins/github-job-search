import React from 'react';
import { observable, action, computed, runInAction, makeAutoObservable, autorun } from "mobx";
import { getList as jobService } from './../Services/Jobs';
class Store {
  @observable lists = [];
  @observable filter = "";
  @observable description = "";
  @observable status;
  @observable location = "";
  @observable type = "";

  constructor() {
    makeAutoObservable(this)
  }

  @action
  setList(list) {
      this.lists = list;
  }

  @action
  setStatus(stat) {
      this.status = stat;
  }

  @action getList = async (search) => {
    try {
      const params = {
        description: search.description || "react",
        type: search.type || "Full Time",
        location: search.location || "Germany"
      };
      //this.setStatus(!this.satus);
      const res = await jobService(params);           
      runInAction(() => { 
        if(res.length > 0 && res){
          this.setStatus(true);
           this.setList(res);       
        }else {
          this.setStatus(false);
        }
            
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
const stores = new Store();
export default stores;