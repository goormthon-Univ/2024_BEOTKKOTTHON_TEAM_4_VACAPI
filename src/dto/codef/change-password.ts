import { CodefResponse } from './response'

export class SecureNoData {
  jobIndex!: number
  threadIndex!: number
  jti!: string
  twoWayTimestamp!: string
  continue2Way!: boolean
  extraInfo!: {
    reqSecureNo: string
    reqSecureNoRefresh: string
  }

  method!: string
}

export class CodefSecureNoResponse extends CodefResponse<SecureNoData> {
}

export class ChallengeResponseData {
  resLoginId!: string
  resRegistrationStatus!: '1' | '0'
  resResultDesc!: string
}

export class CodefChallengeResponse extends CodefResponse<ChallengeResponseData> {
}
