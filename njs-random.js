module.exports.randomStr = function (length, specialCharacters=false) 
{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    if(specialCharacters == true)
        characters+="!@#$%^&*()?/.>,<:;\"\\|}]{[_-+=";

    for ( var i = 0; i < length; i++ )
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}

module.exports.randomNumber = function (length) 
{
    var result           = '';
    var characters       = '0123456789';
    for ( var i = 0; i < length; i++ )
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result;
}