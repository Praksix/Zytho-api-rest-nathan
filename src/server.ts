import app from "./app";

const PORT = 3006;

import cors from "cors";
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

