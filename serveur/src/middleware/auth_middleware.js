import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
        return res.status(401).json({
            message: "Token manquant"
        });
    }

    // Format :
    // Bearer TOKEN

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(403).json({
            message: "Token invalide"
        });

    }

};

export default verifyToken;