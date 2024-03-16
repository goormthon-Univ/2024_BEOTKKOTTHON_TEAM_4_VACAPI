export type ErrorData = {
    code: string,
    message: string,
}

export const ErrorCode = {
    VALIDATION_ERROR: {
        code: "VALIDATION_ERROR",
        message: "요청을 확인해주세요.",
    },
    ID_NOT_FOUND: {
        code: "ID_NOT_FOUND",
        message: "예방접종도우미 ID를 찾을 수 없습니다.",
    },
    AUTH_MISSING: {
        code: "AUTH_MISSING",
        message: "Auth 토큰이 필요합니다.",
    },
    INVALID_AUTH: {
        code: "INVALID_AUTH",
        message: "올바르지 않은 Auth 토큰입니다.",
    },
    NO_CHALLENGE_SECURE_CODE: {
        code: "NO_CHALLENGE_SECURE_CODE",
        message: "보안 코드 단계를 먼저 시행하세요.",
    },
    CHALLENGE_NOT_FOUND: {
        code: "CHALLENGE_NOT_FOUND",
        message: "인증 절차를 다시 시도해주세요.",
    },
    CODEF_ERROR: {
        code: "CODEF_ERROR",
        message: "CODEF 서비스에서 에러가 발생했습니다.",
    },
    PHONE_VERIFICATION_LOCK: {
        code: "PHONE_VERIFICATION_LOCK",
        message: "일일 인증 횟수를 초과하여 잠금 해제가 필요합니다.",
    },
    REGISTER_FIRST: {
        code: "REGISTER_FIRST",
        message: "예방접종도우미에 먼저 가입해주세요.",
    }
}
