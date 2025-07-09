function UserStatus ( {loggedIn, isAdmin} ) {

    if (loggedIn && isAdmin) {
        return `Welcome Admin!`;
    }
    else if (loggedIn) {
        return `Welcome User!`;
    }
}

export default UserStatus;