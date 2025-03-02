import { authInstance } from "./config";

const userEntity = {
  signUp: async (payload) => {
    try {
      const response = await authInstance.post("signUp", {
        ...payload,
        returnSecureToken: true,
      });
      return {
        data: {
          idToken: response.data.idToken,
          email: response.data.email,
          refreshToken: response.data.refreshToken,
          expiresIn: response.data.expiresIn,
          localId: response.data.localId,
        },
        success: true,
      };
    } catch (error) {
      console.log(`[API]: failed to sign in user. Error: ${error.message}`);
      return {
        data: null,
        success: false,
      };
    }
  },
  signIn: async (payload) => {
    try {
      const response = await authInstance.post(
        "/accounts:signInWithPassoword",
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      return {
        data: {
          idToken: response.data.idToken,
          email: response.data.email,
          refreshToken: response.data.refreshToken,
          expiresIn: response.data.expiresIn,
          localId: response.data.localId,
          registered: response.data.registered,
        },
        success: true,
      };
    } catch (error) {
      console.log(`[API]: failed to login user. Error: ${error.message}`);
      return {
        data: null,
        success: false,
      };
    }
  },
};

export default userEntity;
