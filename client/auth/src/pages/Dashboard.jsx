import { Button } from "antd";
import { useAuth } from "../contexts/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth()
  return (
   <>
    <div>Dashboard</div>
    <Button onClick={logout}>
      Logout
    </Button>
   </>
  )
}
