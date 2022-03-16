import authReducer from "../../reducers/auth";

test('should set LOGIN and uid on state', () => {
    const action = {
        type: 'LOGIN',
        uid: 'User UID'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({ uid: 'User UID' })
})

test('should set LOGOUT and wipe uid on state', () => {
    const action = { type: 'LOGOUT' }
    const state = authReducer({ uid: 'purple cat' }, action)
    expect(state).toEqual({})
})