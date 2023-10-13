const createTokenUser = (user) => {
    // let roles = Object.values(user.user_roles);
    // roles = roles.filter((role) => role && role !== null);

    return {
        user_name: user.user_name,
        user_id: user._id,
        user_email: user.user_email,
        role: user.user_roles,
    };
};

export default createTokenUser;
