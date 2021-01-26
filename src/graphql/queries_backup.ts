// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      type
      typeImage
      weapon
      stars
      description
      image
      abilityOne {
        name
        image
        description
      }
      abilityTwo {
        name
        image
        description
      }
      abilityThree {
        name
        image
        description
      }
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
      talentMats {
        talentMat
        bossMat
      }
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: 100, nextToken: $nextToken) {
      items {
        id
        name
        type
        typeImage
        weapon
        stars
        description
        image
        abilityOne {
        name
        image
        description
        }
        abilityTwo {
          name
          image
          description
        }
        abilityThree {
          name
          image
          description
        }
        ascensionMats {
          matOne
          matTwo
          specialty
          commonMat
        }
        talentMats {
          talentMat
          bossMat
        }
      }
      nextToken
    }
  }
`;
export const getWeapon = /* GraphQL */ `
  query GetWeapon($id: ID!) {
    getWeapon(id: $id) {
      id
      name
      type
      stars
      description
      image
      ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
      }
    }
  }
`;
export const listWeapons = /* GraphQL */ `
  query ListWeapons(
    $filter: ModelWeaponFilterInput
    $nextToken: String
  ) {
    listWeapons(filter: $filter, limit: 100, nextToken: $nextToken) {
      items {
        id
        name
        type
        stars
        description
        image
        ascensionMats {
        matOne
        matTwo
        specialty
        commonMat
        }
      }
      nextToken
    }
  }
`;
