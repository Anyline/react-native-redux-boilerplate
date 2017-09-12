const emailValidation = (email) => {
  console.log(email);
  if (email !== null) {
    const emailTrimmed = email.trim();
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(emailTrimmed.toLocaleLowerCase());
  } else {
    return false;
  }
};


export {emailValidation};
