import { StatusCodes } from "http-status-codes";

export const status = {
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 200, "message": "success!"},    

    // common err
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON001", "message": "서버 에러, 관리자에게 문의 바랍니다.", err_code: 'HTTP_INTERNAL_SERVER_ERROR' },
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON002", "message": "잘못된 요청입니다.", err_code: 'HTTP_BAD_REQUEST' },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "COMMON003", "message": "권한이 잘못되었습니다.", err_code: 'HTTP_UNAUTHORIZED'},

    // user err
    USER_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4001", "message": "사용자가 없습니다.", err_code: 'USER_NOT_FOUND'},
    
    KAKAO_AUTH_FAIL : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4003", "message": "Kakao 사용자 인정 과정에서 오류가 발생했습니다", err_code: 'KAKAO_AUTH_FAIL'},
    KAKAO_TOKEN_FAIL: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4002", "message": "Error getting Kakao token", err_code: 'KAKAO_TOKEN_FAIL'},
    KAKAO_USER_NOT_FOUND : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4002", "message": "카카오 계정의 정보를 불러오지 못했습니다.", err_code: 'KAKAO_USER_NOT_FOUND'},
    
    GOOGLE_AUTH_FAIL : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4003", "message": "Google 사용자 인정 과정에서 오류가 발생했습니다", err_code: 'GOOGLE_AUTH_FAIL'},
    GOOGLE_TOKEN_FAIL : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4004", "message": "Error getting Google token", err_code: 'GOOGLE_TOKEN_FAIL'},
    GOOGLE_USER_NOT_FOUND : {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "USER4005", "message": "구글 계정의 정보를 불러오지 못했습니다.", err_code: 'GOOGLE_USER_NOT_FOUND'},


    // post err
    ARTICLE_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "ARTICLE4001", "message": "게시글이 없습니다.", err_code: 'ARTICLE_NOT_FOUND'}
}

export const HTTP_OK = {code: 2000, message: 'OK'};
export const HTTP_BAD_REQUEST = {code: 4000, message: 'Bad Request'};
export const HTTP_INTERNAL_SERVER_ERROR = {code: 5000, message: 'Internal Server Error'};
export const HTTP_NOT_FOUND = {code: 4040, message: 'Not Found'};
export const NOT_FOUND_USER = {code: 3000, message: '존재하지 않는 유저입니다.', err_code: 'NOT_FOUNT_USER'};
export const NOT_FOUND_CHAT_ROOM = {
  code: 3000,
  message: '존재하지 않는 채팅방입니다.',
  err_code: 'NOT_FOUND_CHAT_ROOM',
};

export const NO_PARAMETER = {code: 3001, message: '필수 파라미터가 누락되었습니다.', err_code: 'NO_PARAMETER'};
export const NOT_MEMBER_IN_ROOM = {code: 3002, message: '채팅방에 없는 유저입니다.', err_code: 'NOT_MEMBER_IN_ROOM'};
export const ALREADY_LEAVED_ROOM = {code: 3003, message: '이미 나간 채팅방입니다.', err_code: 'ALREADY_LEAVED_ROOM'};
