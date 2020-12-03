// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      type
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
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
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
