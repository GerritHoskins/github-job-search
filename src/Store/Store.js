import React from 'react';
import { observable, action, computed, runInAction, makeAutoObservable } from "mobx";
import { getList as jobService } from './../Services/Jobs';
class Store {
  @observable lists = [];
  @observable status;
  @observable filter = "";

  @observable description = "";  
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

  @action
  setDescription(description) {
      this.description = description;
  }

  @action
  setLocation(location) {
      this.location = location;
  }

  @action
  setType(type) {
      this.type = type;
  }

  @action getDescription() {
    return this.description || "react";
  }

  @action getType() {
    return this.type;
  }

  @action getLocation() {
    return this.location || "Germany";
  }

  @action getList = async (search) => {
    try {
      const params = {
        description: this.getDescription() ,
        type: this.getType(),
        location: this.getLocation()
      };
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