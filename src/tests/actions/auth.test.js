import { login, logout } from "../../actions/auth";

test('should set login action object', () => {
    const action = login('user uid')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'user uid'
    })
})

test('should set logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})