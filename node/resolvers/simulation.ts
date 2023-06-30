import type { SimulationPayload } from '@vtex/clients'

export const simulation = async (
  _: any,
  { input }: { input: SimulationPayload },
  { clients: { simulation: simulationClient } }: Context
) => simulationClient.simulation(input)
