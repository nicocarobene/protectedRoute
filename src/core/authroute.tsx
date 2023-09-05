import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

interface AuthRouteComponentProps {
  isAllowed: boolean | null;
  redirectPath?: string;
}
export const AuthRouteComponent = (
  {
    isAllowed,
    redirectPath= '/landing'
  } : AuthRouteComponentProps
) => {
  if( isAllowed){
    return <Outlet />
  } 
  toast.error("You need to be logged in to access this page")
  return <Navigate to={redirectPath} replace />
};