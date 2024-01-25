import "dotenv/config"
import { app } from "./app"

const PORT: number = Number(process.env.PORT) || 3000

app.listen(PORT, (): void => console.log(`App is running at port ${PORT}`))