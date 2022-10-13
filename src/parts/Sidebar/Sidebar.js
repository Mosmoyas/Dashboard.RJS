import "../Sidebar/Sidebar.css"


const Sidebar = () => {
    return (
        <>
            <div class="sidebar">
                <h3 class="logo-h3">MosMoyas</h3>
                <ul>
                    <li>
                        <a class="page-link " href="#index.html"><i
                            class="fa-regular fa-chart-bar fa-fw"></i>
                            <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a class=" page-link " href="#Settings.html"><i
                            class="fa-solid fa-gear fa-fw"></i>
                            <span>Settings</span></a>
                    </li>
                    <li>
                        <a class="page-link " href="#Profile.html"><i
                            class="fa-regular fa-user fa-fw"></i>
                            <span>Profile</span></a>
                    </li>
                    <li>
                        <a class="page-link" href="#courses.html"><i
                            class="fa-solid fa-diagram-project fa-fw"></i>
                            <span>Projects</span></a>
                    </li>
                    <li>
                        <a class="active page-link " href="#courses.html"><i
                            class="fa-solid fa-graduation-cap fa-fw"></i>
                            <span>Courses</span></a>
                    </li>
                    <li>
                        <a class=" page-link " href="#friends.html">
                            <i class="fa-solid fa-user-group  fa-fw"></i>
                            <span>Friends</span></a>
                    </li>
                    <li>
                        <a class="page-link " href="#files.html">
                            <i class="fa-regular fa-file fa-fw"></i>
                            <span>Files</span></a>
                    </li>
                    <li>
                        <a class="page-link " href="#plans.html">
                            <i class="fa-solid fa-ruler-combined fa-fw"></i>
                            <span>Plans</span></a>
                    </li>
                </ul>
            </div>
        </>)
}

export default Sidebar