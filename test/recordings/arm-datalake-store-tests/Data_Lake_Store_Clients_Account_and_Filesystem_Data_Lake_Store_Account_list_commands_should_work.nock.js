// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a1af6d4b-d662-47f5-a92a-828dae4240b5',
  'client-request-id': '5f63fa8a-abec-4a6c-becb-0a51c173ffcb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_413',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a1af6d4b-d662-47f5-a92a-828dae4240b5',
  'client-request-id': '5f63fa8a-abec-4a6c-becb-0a51c173ffcb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_413',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1460148008\",\"not_before\":\"1460144108\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.tKHx45keUQej6zFlrk6kMS1mO6DVS1QZCMv8wl_Prhukg8v9phqcb9_q3DRviCPuwCBXKN-nu7pCT6aSD3z8b89qPZsMvVfwJfN511iZkKPDXxL112ClI77f_d2ESk-Ia4l9144NKikbhumnUWT7fZHzi-Za3mSRkYO1Ln9-_D8k1VEPvOyl5JFbEZuqpmuFZ79hvjNbo6dfkdMSmpmfnJODJBm-iLJ5xi11C2_FBK07mQ0Z0I5QioJHwxTlxIjrTxERm-_nVcgb1idpgUor0sEbjcRecFILLRWBbVaLuvv0iF_oMXrzs6xKqSN6CfNsE7cF8lux2H4DmU_PmCvWZQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLYRuQ3SeeHw85pnh-vrxcA5z0trF8PhssWXRzwYvx1fRDURYohCxgGZc2hlbOPb72n8sPK1H1hwiiw_WwWQX4W3TiZYJw3EcIBUBpQDi-dBzDdypibKzm_5thqKCUxa91UVZOxqX3HX4yzVycNz2ux7VWjAky3Kdg6KD7qxehNKe7g1BoISI8rZJ5Te8cCMCIhGBEZkpkf6K6qm8y0zH4sfF96WA6GBiPKLHA9o7ZSpJ5jkyR7AqKCFVnbZzSJerwYDWkvsJ4VAKUTBIxF_zWaqDYqp81SPNk7BC1Km3xudYsJPuYbCKdWaSarfy4d644eiQNeSql2hbxxI2S9KZWIdbiatafw7rLHJkYBkgxEz4IHCTFwpt-o90MsPI2s6CTOu30ZboJBYJS5DRez83KgpxkM-hpZWLpnHJZ7If3YyPgGiivLbhJ4LHKnJHXOW24WxauD8EcO5JGHEbmsdPgwVjTbGw1WCK7-M3mLDyRmFSoN72Zk6nYaDJC_WAF_jkif5bC19vZWKp3HuR7rPLTF_CnXtjk6ob6bdJ2Q83y97mDRkg2dpf409EPTCwXQfYSQbC5O0tdWN1nQSBh21cl4QgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '00260891-42d7-40a0-9d00-cdcbd0f8a2af',
  'client-request-id': '5f63fa8a-abec-4a6c-becb-0a51c173ffcb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_170',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '3013' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3600\",\"expires_on\":\"1460148008\",\"not_before\":\"1460144108\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.tKHx45keUQej6zFlrk6kMS1mO6DVS1QZCMv8wl_Prhukg8v9phqcb9_q3DRviCPuwCBXKN-nu7pCT6aSD3z8b89qPZsMvVfwJfN511iZkKPDXxL112ClI77f_d2ESk-Ia4l9144NKikbhumnUWT7fZHzi-Za3mSRkYO1Ln9-_D8k1VEPvOyl5JFbEZuqpmuFZ79hvjNbo6dfkdMSmpmfnJODJBm-iLJ5xi11C2_FBK07mQ0Z0I5QioJHwxTlxIjrTxERm-_nVcgb1idpgUor0sEbjcRecFILLRWBbVaLuvv0iF_oMXrzs6xKqSN6CfNsE7cF8lux2H4DmU_PmCvWZQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLYRuQ3SeeHw85pnh-vrxcA5z0trF8PhssWXRzwYvx1fRDURYohCxgGZc2hlbOPb72n8sPK1H1hwiiw_WwWQX4W3TiZYJw3EcIBUBpQDi-dBzDdypibKzm_5thqKCUxa91UVZOxqX3HX4yzVycNz2ux7VWjAky3Kdg6KD7qxehNKe7g1BoISI8rZJ5Te8cCMCIhGBEZkpkf6K6qm8y0zH4sfF96WA6GBiPKLHA9o7ZSpJ5jkyR7AqKCFVnbZzSJerwYDWkvsJ4VAKUTBIxF_zWaqDYqp81SPNk7BC1Km3xudYsJPuYbCKdWaSarfy4d644eiQNeSql2hbxxI2S9KZWIdbiatafw7rLHJkYBkgxEz4IHCTFwpt-o90MsPI2s6CTOu30ZboJBYJS5DRez83KgpxkM-hpZWLpnHJZ7If3YyPgGiivLbhJ4LHKnJHXOW24WxauD8EcO5JGHEbmsdPgwVjTbGw1WCK7-M3mLDyRmFSoN72Zk6nYaDJC_WAF_jkif5bC19vZWKp3HuR7rPLTF_CnXtjk6ob6bdJ2Q83y97mDRkg2dpf409EPTCwXQfYSQbC5O0tdWN1nQSBh21cl4QgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '00260891-42d7-40a0-9d00-cdcbd0f8a2af',
  'client-request-id': '5f63fa8a-abec-4a6c-becb-0a51c173ffcb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_170',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '3013' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlxplatrepro.azuredatalakestore.net\",\"creationTime\":\"2016-03-28T18:31:27.9024481Z\",\"lastModifiedTime\":\"2016-03-28T18:31:27.9024481Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlxplatreprorg/providers/Microsoft.DataLakeStore/accounts/adlxplatrepro\",\"name\":\"adlxplatrepro\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct127.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:20:52.4391202Z\",\"lastModifiedTime\":\"2016-04-05T22:20:52.4391202Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg806/providers/Microsoft.DataLakeStore/accounts/javaadlsacct127\",\"name\":\"javaadlsacct127\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct119.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:14:48.6188178Z\",\"lastModifiedTime\":\"2016-04-05T22:14:48.6188178Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg819/providers/Microsoft.DataLakeStore/accounts/javaadlsacct119\",\"name\":\"javaadlsacct119\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6491.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:10.9632015Z\",\"lastModifiedTime\":\"2016-04-08T19:39:10.9632015Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6491\",\"name\":\"xplattestadls6491\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8658.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:35.8221373Z\",\"lastModifiedTime\":\"2016-04-08T19:39:35.8221373Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8658\",\"name\":\"xplattestadls8658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2377',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e1f1e2ae-6fdd-4415-aa92-90c86359e28e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e8230c0a-93d2-4a9f-a9f6-9e91132d7992',
  'x-ms-routing-request-id': 'WESTUS:20160408T194008Z:e8230c0a-93d2-4a9f-a9f6-9e91132d7992',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlxplatrepro.azuredatalakestore.net\",\"creationTime\":\"2016-03-28T18:31:27.9024481Z\",\"lastModifiedTime\":\"2016-03-28T18:31:27.9024481Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlxplatreprorg/providers/Microsoft.DataLakeStore/accounts/adlxplatrepro\",\"name\":\"adlxplatrepro\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct127.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:20:52.4391202Z\",\"lastModifiedTime\":\"2016-04-05T22:20:52.4391202Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg806/providers/Microsoft.DataLakeStore/accounts/javaadlsacct127\",\"name\":\"javaadlsacct127\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct119.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:14:48.6188178Z\",\"lastModifiedTime\":\"2016-04-05T22:14:48.6188178Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg819/providers/Microsoft.DataLakeStore/accounts/javaadlsacct119\",\"name\":\"javaadlsacct119\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6491.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:10.9632015Z\",\"lastModifiedTime\":\"2016-04-08T19:39:10.9632015Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6491\",\"name\":\"xplattestadls6491\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8658.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:35.8221373Z\",\"lastModifiedTime\":\"2016-04-08T19:39:35.8221373Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8658\",\"name\":\"xplattestadls8658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2377',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e1f1e2ae-6fdd-4415-aa92-90c86359e28e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e8230c0a-93d2-4a9f-a9f6-9e91132d7992',
  'x-ms-routing-request-id': 'WESTUS:20160408T194008Z:e8230c0a-93d2-4a9f-a9f6-9e91132d7992',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '921c8547-d6bd-41d1-b1c8-0f51331ec009',
  'client-request-id': '2d3178ed-a10e-4fba-aed5-a23e3ae6e96c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_290',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '921c8547-d6bd-41d1-b1c8-0f51331ec009',
  'client-request-id': '2d3178ed-a10e-4fba-aed5-a23e3ae6e96c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_290',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460148008\",\"not_before\":\"1460144108\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.tKHx45keUQej6zFlrk6kMS1mO6DVS1QZCMv8wl_Prhukg8v9phqcb9_q3DRviCPuwCBXKN-nu7pCT6aSD3z8b89qPZsMvVfwJfN511iZkKPDXxL112ClI77f_d2ESk-Ia4l9144NKikbhumnUWT7fZHzi-Za3mSRkYO1Ln9-_D8k1VEPvOyl5JFbEZuqpmuFZ79hvjNbo6dfkdMSmpmfnJODJBm-iLJ5xi11C2_FBK07mQ0Z0I5QioJHwxTlxIjrTxERm-_nVcgb1idpgUor0sEbjcRecFILLRWBbVaLuvv0iF_oMXrzs6xKqSN6CfNsE7cF8lux2H4DmU_PmCvWZQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLZMOkssIGyoTcWq-oR0nFkHdhW5wXRtvWnKqGIpfQC369PqhVyWxHvezLBNqTj61-c0BAoUxJbxMk7oXYTBS_5wr0eW2rvXiB5sm2aSeeDtI_qB6RU07CQmdP8ulqbhKCeCfEffyoY23KhbcvQrVrqM5ZfFz78UcdEXMoRG1BoqCo0U1PrIikXF331LptxiHALzdklUO6JTMTP1LI0AwED_5MS-i4xNxngAcurjSRT0GtDJ6O1xjU_hmJGt4BBnGOwhBh_7L90BXoibL237nIvomxzp8lWk_rB4i2bkCBIjkWmf5mOEIOHldvWhki_tVIFGY-aADpnq3lGybZZoBvI29p7BPpRE8GrB5xuJTs0sqbnMk8JgnSCht1ZP0PUzjN5tIWQYU872bQt3NSS8HAbOsJopZYpe-j_7niIrAX-Y6-xWAR72q-Q1yZTroOLkW5wpIlcEW3YIO7lg1zVUxtmymmp-ZoXRYxvZTAxcdNvZc7AjGprTl9ebiANrmo4Dg6oxwObVLdsFjoAk9ausjxQMlZ2KPShV7EPbsCJU9s3l88zAV8Bhdu-DvrgrDlAlKSAAj_lccmeJDxhngTBABSP0gAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'aa2bf3cc-abed-4e2f-b311-8acb32fa667d',
  'client-request-id': '2d3178ed-a10e-4fba-aed5-a23e3ae6e96c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '3013' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460148008\",\"not_before\":\"1460144108\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.tKHx45keUQej6zFlrk6kMS1mO6DVS1QZCMv8wl_Prhukg8v9phqcb9_q3DRviCPuwCBXKN-nu7pCT6aSD3z8b89qPZsMvVfwJfN511iZkKPDXxL112ClI77f_d2ESk-Ia4l9144NKikbhumnUWT7fZHzi-Za3mSRkYO1Ln9-_D8k1VEPvOyl5JFbEZuqpmuFZ79hvjNbo6dfkdMSmpmfnJODJBm-iLJ5xi11C2_FBK07mQ0Z0I5QioJHwxTlxIjrTxERm-_nVcgb1idpgUor0sEbjcRecFILLRWBbVaLuvv0iF_oMXrzs6xKqSN6CfNsE7cF8lux2H4DmU_PmCvWZQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLZMOkssIGyoTcWq-oR0nFkHdhW5wXRtvWnKqGIpfQC369PqhVyWxHvezLBNqTj61-c0BAoUxJbxMk7oXYTBS_5wr0eW2rvXiB5sm2aSeeDtI_qB6RU07CQmdP8ulqbhKCeCfEffyoY23KhbcvQrVrqM5ZfFz78UcdEXMoRG1BoqCo0U1PrIikXF331LptxiHALzdklUO6JTMTP1LI0AwED_5MS-i4xNxngAcurjSRT0GtDJ6O1xjU_hmJGt4BBnGOwhBh_7L90BXoibL237nIvomxzp8lWk_rB4i2bkCBIjkWmf5mOEIOHldvWhki_tVIFGY-aADpnq3lGybZZoBvI29p7BPpRE8GrB5xuJTs0sqbnMk8JgnSCht1ZP0PUzjN5tIWQYU872bQt3NSS8HAbOsJopZYpe-j_7niIrAX-Y6-xWAR72q-Q1yZTroOLkW5wpIlcEW3YIO7lg1zVUxtmymmp-ZoXRYxvZTAxcdNvZc7AjGprTl9ebiANrmo4Dg6oxwObVLdsFjoAk9ausjxQMlZ2KPShV7EPbsCJU9s3l88zAV8Bhdu-DvrgrDlAlKSAAj_lccmeJDxhngTBABSP0gAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwMTQ0MTA4LCJuYmYiOjE0NjAxNDQxMDgsImV4cCI6MTQ2MDE0ODAwOCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'aa2bf3cc-abed-4e2f-b311-8acb32fa667d',
  'client-request-id': '2d3178ed-a10e-4fba-aed5-a23e3ae6e96c',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_5',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close',
  'content-length': '3013' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6491.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:10.9632015Z\",\"lastModifiedTime\":\"2016-04-08T19:39:10.9632015Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6491\",\"name\":\"xplattestadls6491\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8658.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:35.8221373Z\",\"lastModifiedTime\":\"2016-04-08T19:39:35.8221373Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8658\",\"name\":\"xplattestadls8658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16b7c1de-b2de-46f1-8f83-8f21ec492175',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '96bdd8d6-922e-42be-9024-75206b88890a',
  'x-ms-routing-request-id': 'WESTUS:20160408T194008Z:96bdd8d6-922e-42be-9024-75206b88890a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6491.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:10.9632015Z\",\"lastModifiedTime\":\"2016-04-08T19:39:10.9632015Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6491\",\"name\":\"xplattestadls6491\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8658.azuredatalakestore.net\",\"creationTime\":\"2016-04-08T19:39:35.8221373Z\",\"lastModifiedTime\":\"2016-04-08T19:39:35.8221373Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8658\",\"name\":\"xplattestadls8658\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16b7c1de-b2de-46f1-8f83-8f21ec492175',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '96bdd8d6-922e-42be-9024-75206b88890a',
  'x-ms-routing-request-id': 'WESTUS:20160408T194008Z:96bdd8d6-922e-42be-9024-75206b88890a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 08 Apr 2016 19:40:08 GMT',
  connection: 'close' });
 return result; }]];