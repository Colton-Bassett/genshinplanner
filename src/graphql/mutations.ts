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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
export const createWeapon = /* GraphQL */ `
  mutation CreateWeapon(
    $input: CreateWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    createWeapon(input: $input, condition: $condition) {
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
export const updateWeapon = /* GraphQL */ `
  mutation UpdateWeapon(
    $input: UpdateWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    updateWeapon(input: $input, condition: $condition) {
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
export const deleteWeapon = /* GraphQL */ `
  mutation DeleteWeapon(
    $input: DeleteWeaponInput!
    $condition: ModelWeaponConditionInput
  ) {
    deleteWeapon(input: $input, condition: $condition) {
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
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
      id
      name
      type
      stars
      position
      description
      image
      sources {
        sourceOne
        sourceTwo
        sourceThree
        sourceFour
        sourceFive
      }
    }
  }
`;
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
      id
      name
      type
      stars
      position
      description
      image
      sources {
        sourceOne
        sourceTwo
        sourceThree
        sourceFour
        sourceFive
      }
    }
  }
`;
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
      id
      name
      type
      stars
      position
      description
      image
      sources {
        sourceOne
        sourceTwo
        sourceThree
        sourceFour
        sourceFive
      }
    }
  }
`;
