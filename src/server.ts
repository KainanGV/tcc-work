import app from ".";

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
