import { Express } from "express"
import vehicleRoutes from "./Vehicles"

export const useRoutes = (app: Express) => {
    app.use("/vehicles", vehicleRoutes)
}