import Axios from "./Axios";

//register new user

export const registerService = async (user) => {
   const { data } = await Axios.post("/users/register", user);
   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

//logout user Function

export const logoutService = () => {
   localStorage.removeItem("userInfo");
   return null;
};

//login user API call

export const loginService = async (user) => {
   const { data } = await Axios.post("/users/login", user);

   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

//update profile API call

export const updateProfileService = async (user, token) => {
   const { data } = await Axios.put("/users/update", user, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

export const deleteProfileService = async (token) => {
   const { data } = await Axios.delete("/users", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   if (data) {
      localStorage.removeItem("userInfo");
   }
   return data;
};

//change password api call

export const changePasswordService = async (passwords, token) => {
   const { data } = await Axios.put("/users/password", passwords, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//get all favorite movies

export const getFavoriteMovies = async (token) => {
   const { data } = await Axios.get("/users/favorites", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//delete all favorite movies

export const deleteFavoriteMovies = async (token) => {
   const { data } = await Axios.delete("/users/favorites", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//like movie API call

export const likeMovieService = async (movieId, token) => {
   const { data } = await Axios.post(`/users/favorites`, movieId, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

// admin get all users

export const getAllUsersService = async (token) => {
   const { data } = await Axios.get("/users", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//admin delete user

export const deleteUserService = async (id, token) => {
   const { data } = await Axios.delete(`/users/${id}`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};
