import { NodeHandlerBase } from './node-handler-base';

export function createMeta(props) {
  return { documentation: 'The code graph starts here. Add blocks below by clicking "+"!', inputs: [] };
}

export class MetaHandler extends NodeHandlerBase { }
