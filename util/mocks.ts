import { RequestError } from "../src/lib/network/RequestError"

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function loadProductsMock() {
   await delay(2000)

    throw RequestError.unauthorized()
  //  return
}