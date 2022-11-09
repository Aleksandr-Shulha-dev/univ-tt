import { faker } from '@faker-js/faker';

import { IPlayer } from '../common/types'

const getFakePlayer = (): IPlayer => {
  const newFakePlayer = {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
    score: Math.round(Math.random() * 1000),
    bio: faker.lorem.sentences(),
  }

  return newFakePlayer;
}

export { getFakePlayer };