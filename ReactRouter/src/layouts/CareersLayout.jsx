import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, impedit cum, ipsa dolor debitis ut deserunt ullam eveniet asperiores nesciunt aliquam rem autem suscipit excepturi molestias modi labore sint enim.</p>
    <Outlet/> {/* This is where the nested routes will be rendered */}
    </div>
  )
}
