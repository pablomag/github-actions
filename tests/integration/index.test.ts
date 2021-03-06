import { Helper } from '../helpers/helpers'

const helper = new Helper()

beforeEach(() => {
  jest.resetModules()
})

describe('Sum endpoint', () => {
  const prefix = '/sum'
  it('Consuming API endpoint /sum/1/3', async (done) => {
    const response = await helper.apiServer.get(`${prefix}/1/3`)
    expect(response.body.result).toBe(4)
    expect(response.status).toBe(200)
    done()
  })
})

describe('Index endpoint', () => {
  it('Consuming API endpoint index', async (done) => {
    const response = await helper.apiServer.get('/')
    expect(response.text).toBe('Hello pablomag!')
    expect(response.status).toBe(200)
    done()
  })
})
