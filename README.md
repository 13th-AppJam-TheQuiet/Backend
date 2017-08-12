# The Quiet

* SmarTeen App Club 13th AppJam "The Quiet" API DOCS

* 모든 요청 : POST , x-www-form-urlencoded 으로 처리

## DataBase Schema

> User_Schema

    username : {
        type : String
    },
    id : {
        type : String
    },
    password : {
        type : String
    }
        
> Place_Schema

     placeid : {
        type : String
     },
     placename : {
        type : String
     },
     Latitude : {
         type : Number
     },
     Logitude : {
         type : Number
     },
     decibel : {
         type : Number
     },
     lastupdate : {
         type : String
     }


## API Document

### Auth (회원가입, 로그인)

> /auth/login : 유저 로그인
>> Requiring Params

    id : UserID (String)
    password : UserPassword (String)

>> Return Values

    >>> Success

        return UserSchema

    >>> Fail

        return success : false
        
> /auth/register : 유저 회원가입
>> Requiring Params

    username : UserName (String)
    id : UserID (String)
    password : UserPassword (String)
    
>> Return Valuse

    >>> Success
        
        return success : true
        
    >>> Fail
    
        return success : false
       
       
### Place

> /place/setting : 장소등록 (관리자용)
>> Requiring Params

    placename : 장소이름
    Latitude : 위도
    Logitude : 경도

>> Return Values

    >>> Success
        
        return HTTP 200 , success : true
        
    >>> Fail
    
        return HTTP 403 , success : false
    
> /place/update : 장소 이용 마침 (장소떠남)
>> Requiring Params

    placeid : 장소 아이디
    decibel : 아두이노에서 받은 소음정도
    lastconnect : 아두이노와 블루투스 통신이 끊어진 시간 (연도부터 분까지)
    
>> Return Values

    >>> Success
        
        return HTTP 200 , success : true
        
    >>> Fail
    
        return HTTP 403 , success : false