import { IPlayer } from '../common/types'

const createStreamString = (data?: IPlayer): string => {
  return data ?
    `id: ${data.id}\ndata: ${JSON.stringify(data)}\n\n` :
    'id: -1\ndata:\n\n';
}

export { createStreamString }