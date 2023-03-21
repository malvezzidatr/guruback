import bcrypt from 'bcrypt';
const saltRounds = 10;

export const encryptPassword = async (password: string) => {
    const hashPassword = await bcrypt.hash(password, saltRounds)
    return hashPassword;
}

export const checkPassword = async (password: string, hashPassword: string) => {
    const isEqual = await bcrypt.compare(password, hashPassword).then((result) => {console.log(result)})
    return isEqual;
}