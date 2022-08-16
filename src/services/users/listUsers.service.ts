import userRepository from '../../repositories/userRepository';

export const listUserService = async () => {
	const users = await userRepository.find();
	return users;
};
