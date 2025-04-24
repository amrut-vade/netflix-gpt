

 export const checkvalidaData = (email, password)=>{


   // const fullName =  /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(fullName);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!ispasswordValid) return "password is not valid";
    //if(!fullName) return "Full Name is not valid";

    return null;
}