Databases:

# Users

    uuid
    rank
    userName
    displayName
    email
    address
    city
    state
    zip
    country
    phone
    photoUrl
    fingerprint
    numRequests
    numErrors
    createdAt
    note
    authorizations

# Authorizations

    timestamp
    uuid
    provider
    token
    userId
    data

# Requests

    timestamp
    uuid
    reqType
    url
    reqCode
    ipAddress
    reqJWT
    city
    state
    zip
    country

## Token

header: {
"alg": "EdDSA",
"typ": "JWT",
uuid
},
payload: {
"sid": "{uuid}",
"iss": "scotty.nyc",
"iat": 1300819380,
"exp": 1300819380,
}
