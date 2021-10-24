import bcrypt from 'bcryptjs';

export const comparePassword = async (password, hash) => {
    const passwordDecrypt = await bcrypt.compare(password, hash);
    console.log(passwordDecrypt);
    if (!passwordDecrypt) {
        return
    }
    return passwordDecrypt;
}