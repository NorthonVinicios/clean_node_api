import { SignUpController } from './signup'

describe('Signup Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: "any_email@mail.com",
                password: "any_password",
                passwordConfirmation: "any_password",
            }
        }
        const httpResponde = sut.handle(httpRequest)
        expect(httpResponde.statusCode).toBe(400)
        expect(httpResponde.body).toEqual(new Error('missing param: name'))
        
    })
})
describe('Signup Controller', () => {
    test('Should return 400 if no email is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: "any_name",
                password: "any_password",
                passwordConfirmation: "any_password",
            }
        }
        const httpResponde = sut.handle(httpRequest)
        expect(httpResponde.statusCode).toBe(400)
        expect(httpResponde.body).toEqual(new Error('missing param: email'))

    })
})
describe('Signup Controller', () => {
    test('Should return 400 if no password is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: "any_name",
                email: "any_email@mail.com",
                passwordConfirmation: "any_password",
            }
        }
        const httpResponde = sut.handle(httpRequest)
        expect(httpResponde.statusCode).toBe(400)
        expect(httpResponde.body).toEqual(new Error('missing param: password'))

    })
})
describe('Signup Controller', () => {
    test('Should return 400 if no passwordConfirmation is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: "any_name",
                email: "any_email@mail.com",
                password: "any_password",
            }
        }
        const httpResponde = sut.handle(httpRequest)
        expect(httpResponde.statusCode).toBe(400)
        expect(httpResponde.body).toEqual(new Error('missing param: password Confirmation'))

    })
})