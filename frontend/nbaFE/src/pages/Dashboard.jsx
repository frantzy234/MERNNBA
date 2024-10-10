import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'; 

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
     
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

       
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="dashboardContainer"> 
            <h1 className="dashboardTitle">Dashboard</h1>
            <div className="dashboardGreet"> 
                <h1>Welcome!</h1> 
                <p>You will be redirected to the home page shortly...</p> {/* Redirect notice */}
            </div>
        </div>
    );
}

export default Dashboard;
