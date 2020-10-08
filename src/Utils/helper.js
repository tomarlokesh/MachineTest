const emailValidate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    return false;
  } else {
    console.log("Email is Correct");
    return true;
  }
}

const passwordValidate = (text) => {
  console.log(text);
  let reg = /^.*(?=.{6,16})(?=.*\d)(?=.*[!”#$%’()*+,-./:;<=>?@[\]_^`{|}~])(?=.*[a-zA-Z]).*$/;
  if (reg.test(text) === false) {
    console.log("Password should contain at least one number, one lowercase, one uppercase and one special character");
    return false;
  } else {
    console.log("Password is Correct");
    return true;
  }
}

const mobileValidate = (text) => {
  console.log(text);
  let reg = /^[0-9]\d{7,12}/;
  if (reg.test(text) === false) {
    console.log("Contact number should contains min 8 and max 12 numbers only");
    return false;
  } else {
    console.log("Contact is Correct");
    return true;
  }
}

export default {
  emailValidate,
  passwordValidate,
  mobileValidate,
}