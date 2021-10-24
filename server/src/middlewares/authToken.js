import jwt from 'jsonwebtoken';
import User from '../models/users.models.js';

export const isAuthenticated = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).json({ code: "Failed", message: "Missing authorization not provided" })
  };
  const bearerAuth = req.headers["authorization"];
  const bearerMethod = bearerAuth.split(" ")[0];
  const accessToken = bearerAuth.split(" ")[1];
  if (!bearerMethod || !accessToken) {
    return res.status(403).json({ code: "Failed", message: "Invalid auth" });
  } else if (bearerMethod !== "Bearer") {
    return res.status(403).json({ code: "Failded", message: "Invalid auth method" });
  };

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await User.findById(decoded._id).select('-password');
    console.log(user);
    if (!user) {
      return res.status(403).json({ code: "Failded", message: "Invalid Token" })
    };
    if (!decoded._id) {
      return res.status(403).json({ code: "Failded", message: "Invalid Token" })
    };
    req.user = user;
    next();
  } catch {
    return res.status(403).json({ code: "Failded", message: "Invalid Token" })
  }

}