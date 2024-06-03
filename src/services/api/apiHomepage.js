import axios from "axios";

export const postHomepage = async (body) => {
  try {
    const response = await axios.post("https://dev-api-hostproject.web.app/places/show", body, {
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "X-Frame-Options": "deny",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Authorization": "Bearer" 
      }
    });

    const token = response.data.data[0].tokenSession;
    // Assuming you want to set the token in cookies
    // Use your preferred method to set the token in cookies here
    // For example:
    // cookies().set("TOKEN", token);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
