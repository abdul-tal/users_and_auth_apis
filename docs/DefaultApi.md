# UsersAndAuthApis.DefaultApi

All URIs are relative to *http://localhost:8006*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerPost**](DefaultApi.md#registerPost) | **POST** /register | registers new user

<a name="registerPost"></a>
# **registerPost**
> User registerPost(body)

registers new user

This api registers a new user

### Example
```javascript
import {UsersAndAuthApis} from 'users_and_auth_apis';

let apiInstance = new UsersAndAuthApis.DefaultApi();
let body = new UsersAndAuthApis.User(); // User | 

apiInstance.registerPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

