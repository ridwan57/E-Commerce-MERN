import axios from "axios";

export const userCart = async (cart, authtoken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/user/cart`,
        { cart },
        {
            headers: {
                authtoken,
            },
        }
    );
};

export const getUserCart = async (authtoken) => {
    return await axios.get(
        `${process.env.REACT_APP_API}/user/cart`,
        {
            headers: {
                authtoken,
            },
        }
    );
};
export const emptyUserCart = async (authtoken) => {
    return await axios.delete(
        `${process.env.REACT_APP_API}/user/cart`,
        {
            headers: {
                authtoken,
            },
        }
    );
};

export const saveUserAddress = async (authtoken, address) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/user/cart`,
        { address },
        {
            headers: {
                authtoken,
            },
        }
    );
};



// export const currentUser = async (authtoken) => {
//     return await axios.post(
//         `${process.env.REACT_APP_API}/current-user`,
//         {},
//         {
//             headers: {
//                 authtoken,
//             },
//         }
//     );
// };

// export const currentAdmin = async (authtoken) => {
//     return await axios.post(
//         `${process.env.REACT_APP_API}/current-admin`,
//         {},
//         {
//             headers: {
//                 authtoken,
//             },
//         }
//     );
// };
