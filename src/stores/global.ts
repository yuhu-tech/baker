import { observable, action } from 'mobx';
import request from '@/utils/request';
import { IParamsDefineYourFunction } from './data';

class Global {
  @observable defineYourVariable: string = "I'm here!";
  @observable user: string = 'Please click to get';

  /**
   * description
   * @param param explain your param
   */
  @action defineYourFunction = (param: IParamsDefineYourFunction) => {
    this.defineYourVariable = param.ctx;
  };

  @action getUser = () => {
    request('/api/user', {
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        this.user = res.data.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

const GlobalStore = new Global();

export default GlobalStore;
