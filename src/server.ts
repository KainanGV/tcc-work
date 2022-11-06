import app from ".";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Aplication is running on PORT ${PORT}`));
