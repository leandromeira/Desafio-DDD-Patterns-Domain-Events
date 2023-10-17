import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import AddressChangedEvent from "../address-changed.event";

export default class EnviaConsoleLogEnderecoAlteradoHandler
  implements EventHandlerInterface<AddressChangedEvent>
{
  handle(event: AddressChangedEvent): void {
    let customer = event.eventData;
    console.log("Endereço do cliente: " + customer.id + ", " + customer.name + 
    " alterado para: " + customer.Address.toString());
  }
}
