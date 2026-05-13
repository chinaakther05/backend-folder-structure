import app from "./app";

const PORT = Number(process.env.PORT) || 5000;

let server: any;

const startServer = () => {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();

// 🧠 handle unhandled rejection
process.on("unhandledRejection", (err: unknown) => {
  console.log("Unhandled Rejection:", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});