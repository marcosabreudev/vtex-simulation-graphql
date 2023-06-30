import { IOClients } from '@vtex/api'
import { Checkout } from '@vtex/clients'

export class Clients extends IOClients {
  public get simulation() {
    return this.getOrSet('simulation', Checkout)
  }
}
