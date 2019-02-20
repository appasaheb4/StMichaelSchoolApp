export default class Singleton {
  static myInstance = null;
  public userId: string = "";

  /**
   * @returns {Singleton}
   */
  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(id: string) {
    this.userId = id;
  }
}
