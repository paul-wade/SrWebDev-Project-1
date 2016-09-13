var isPasswordPartValid = function (element, password, regex) {
    var isValid = password.match(regex);
    if (!isValid) {
        element.removeClass().addClass('fa-li fa fa-times Invalid');
    }
    else {
        element.removeClass().addClass('fa-li fa fa-check Valid');
    }
};

$(document).ready(function () {
    var passwordInput = $("#inputPassword").keyup(function () {
        var password = this.value;
        isPasswordPartValid($('#promptSixChar'), password, ".{6,}");
        isPasswordPartValid($('#promptUpper'), password, "[A-Z]");
        isPasswordPartValid($('#promptLower'), password, "[a-z]");
        isPasswordPartValid($('#promptNumber'), password, "[0-9]");
    });
});