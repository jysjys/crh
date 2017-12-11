var http = require('http'); 
var crypto = require('crypto');
var querystring = require('querystring'); 
var request = require('request');

function SmsCode() 
{ 
 this.send = function (phone) { 
  let num = '';
    for (let i = 0; i < 6; i ++) {
      num += Math.floor(Math.random() * 9);
    }
    return num;
  var epid= num;
  var ua ='uuwifi';
  var pwd='uuwifi';
  var base = 'http://211.140.167.3:9000/interface/smshttp.asp';
  var msg = "您的验证码是："+epid+"。请不要把验证码泄露给其他人。如非本人操作，可不用理会！";
    var md5pwd = crypto.createHash("md5");
    md5pwd.update(pwd);
    var pwdstr = md5pwd.digest('hex').substring(8,24);
    console.log('==>pwdstr',pwdstr);
    var md5msg = crypto.createHash('md5');
    md5msg.update(msg);
    var msgmd5 = md5msg.digest('hex').substring(8,24);

    console.log('===msgmd5:',msgmd5);

    var d = epid+ua+pwdstr+msgmd5;
    console.log('===>data:',d);

    var md5sum=crypto.createHash( "md5" );
    md5sum.update(d);
    var key = md5sum.digest( "hex" ).substring(8,24);
    console.log('===>key:',key);
    var url = base + '?'+'epid='+epid+'&'+'ua='+ua+'&'+'key='+key+'&'+'msg='+msg+'&phone='+phone+'&linkid='+Math.trunc(Math.random()*1000);
    console.log('==>sms url:',url);
  // request.get(encodeURI(url))
  // .on('response', function(res){
  //   console.log(res.statusCode);
  //   console.log(res.headers);
  // }).on('data', function(data){
  //       console.log(data.toString());
  //   })
  return epid;
 }; 
} 
module.exports = SmsCode;