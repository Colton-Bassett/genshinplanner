import Material from './material'

export default interface AscensionPlan {
    // unique id set by uuid library
	id?: string,
	name?: string,
	type?: string,
	typeImage?: string,
	stars?: string,
	image?: string,

	currentMax?: boolean,
	desiredMax?: boolean,
	startAscension?: number,
	endAscension?: number,

	talentOneStart?: number,
	talentOneEnd?: number,
	talentTwoStart?: number,
	talentTwoEnd?: number,
	talentThreeStart?: number,
	talentThreeEnd?: number,

	talentMat?: string,
	materials?: Array<Material>
}