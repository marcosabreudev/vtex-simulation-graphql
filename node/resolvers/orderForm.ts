export const orderForm = async (
  _: any,
  { orderFormId }: { orderFormId: string },
  { clients: { simulation: simulationClient } }: Context
) => simulationClient.orderForm(orderFormId)
