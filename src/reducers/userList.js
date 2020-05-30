function userList(state = [], action) {
    switch (action.type) {
        case 'userList_add':
            console.log(action.pyload);
            return [1,1,1]
        case 'userList_del':
            console.log(action.pyload);
            return [1,2,3]
        case 'userList_update':
            console.log(action.pyload);
            return [1,3,5]
        case 'userList_set':
            console.log(action.pyload);
            return [1,10,100]
      default:
            return state
    }
}
export default userList