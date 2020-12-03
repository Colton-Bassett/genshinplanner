// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
