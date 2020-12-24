import React from 'react';
import { observable, action, computed, runInAction, makeAutoObservable } from "mobx";
import {jobAPI} from './../Services/Jobs';

class Store {
  @observable lists = [];
  @observable currentData = [];
  @observable currentPage = 1;
  @observable offset = 0;
  @observable pageLimit = 5;
  @observable status = false;
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

  @action
  setCurrentPage(currentPage) {
      this.currentPage = currentPage;
  }

  @action
  setPageLimit(pageLimit) {
      this.pageLimit = pageLimit;
  }

  @action getStatus() {
    return this.status;
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

  @action getOffset() {
    return this.offset ;
  }

  @action async fetchList() {
    try {
      const response = await jobAPI();  
      runInAction(() => { 
        this.addToList(response);
        this.splitCurrentData;
        this.setStatus(true);
      });
    }catch(error) {
      console.log(error);
    }
  }

  @action get splitCurrentData() {
    const offset = (this.currentPage - 1) * this.pageLimit; 
    const currentData = this.lists.slice(offset, offset + this.pageLimit);
    this.currentData = currentData;
    return this.currentData;
  }

  @action addToList = (response) => {
    this.lists = response;
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